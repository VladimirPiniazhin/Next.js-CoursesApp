FROM node:20-alpine AS builder
WORKDIR /opt/docker/courses-app
ARG NEXT_PUBLIC_DOMAIN
ENV NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN mkdir -p public
RUN npm prune --production && \
    rm -rf .git node_modules/.cache

FROM node:20-alpine AS runner
WORKDIR /opt/docker/courses-app
ARG NEXT_PUBLIC_DOMAIN
COPY --from=builder /opt/docker/courses-app/package*.json ./
COPY --from=builder /opt/docker/courses-app/.next ./.next
COPY --from=builder /opt/docker/courses-app/node_modules ./node_modules
COPY --from=builder /opt/docker/courses-app/next.config.ts ./next.config.ts
RUN mkdir -p public
ENV NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1
CMD ["npm", "start"]
