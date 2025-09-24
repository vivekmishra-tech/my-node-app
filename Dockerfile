# stage 1: build (optional for node apps, kept minimal)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# copy app files
COPY src ./src

# stage 2: final
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
EXPOSE 3000
USER node
CMD ["node", "src/index.js"]
