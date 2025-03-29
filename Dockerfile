FROM node:20-alpine AS builder
WORKDIR /opt/docker/courses-app
ARG NEXT_PUBLIC_DOMAIN
ENV NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN mkdir -p public

FROM node:20-alpine AS runner
WORKDIR /opt/docker/courses-app
ARG NEXT_PUBLIC_DOMAIN
COPY --from=builder /opt/docker/courses-app/package*.json ./
COPY --from=builder /opt/docker/courses-app/.next ./.next
RUN mkdir -p public
COPY --from=builder /opt/docker/courses-app/public/* ./public/ 2>/dev/null || true
COPY --from=builder /opt/docker/courses-app/node_modules ./node_modules
ENV NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}
CMD ["npm", "start"]
