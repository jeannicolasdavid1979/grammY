FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install --no-audit --no-fund
COPY bot.mts .
CMD ["npx", "tsx", "bot.mts"]
