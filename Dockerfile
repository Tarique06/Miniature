FROM node:16.13.2-alpine

WORKDIR /index

COPY . .

RUN npm ci

EXPOSE 8080

CMD ["node", "index.js"]