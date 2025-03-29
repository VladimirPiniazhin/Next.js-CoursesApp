FROM node:20-alpine AS builder
WORKDIR /opt/courses-app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /opt/courses-app
COPY --from=builder /opt/courses-app/package*.json ./
COPY --from=builder /opt/courses-app/.next ./.next
COPY --from=builder /opt/courses-app/public ./public
COPY --from=builder /opt/courses-app/node_modules ./node_modules
CMD ["npm", "start"]
