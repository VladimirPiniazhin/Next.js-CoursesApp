FROM node:20-alpine AS builder
WORKDIR /opt/docker/courses-app
ARG NEXT_PUBLIC_DOMAIN
ENV NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && \
    mkdir -p public && \
    npm prune --production && \
    rm -rf .git node_modules/.cache node_modules/*/test node_modules/*/docs

FROM node:20-alpine AS runner
WORKDIR /opt/docker/courses-app
ARG NEXT_PUBLIC_DOMAIN
ENV NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}
ENV NODE_ENV=production

COPY --from=builder /opt/docker/courses-app/.next/standalone ./
COPY --from=builder /opt/docker/courses-app/.next/static ./.next/static
COPY --from=builder /opt/docker/courses-app/public ./public
COPY --from=builder /opt/docker/courses-app/next.config.ts ./next.config.ts

RUN find . -name "node_modules" -type d -prune -exec rm -rf '{}' \;
CMD ["npm", "start"]
