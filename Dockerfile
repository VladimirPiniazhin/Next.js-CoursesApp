FROM node:20-alpine AS build-stage
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000
