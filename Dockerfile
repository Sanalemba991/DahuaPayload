# -- Build stage --
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm
COPY . .
RUN pnpm install
RUN pnpm build
# Copy public directory containing robots.txt and sitemap.xml
COPY public/ ./public/
# Copy source files including sitemap.ts
COPY src/ ./src/
# -- Production image --
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
EXPOSE 3002
CMD ["npm", "run", "start"]