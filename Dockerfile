FROM node:20-alpine AS builder
WORKDIR /opt/docker/courses-app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /opt/docker/courses-app
COPY --from=builder /opt/docker/courses-app/package*.json ./
COPY --from=builder /opt/docker/courses-app/.next ./.next
COPY --from=builder /opt/docker/courses-app/public ./public
COPY --from=builder /opt/docker/courses-app/node_modules ./node_modules
CMD ["npm", "start"]
