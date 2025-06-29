FROM node:18
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm run build
EXPOSE 3002
CMD ["npm", "run", "start"]
