FROM node:17.9.1-alpine3.15

RUN apk update

RUN mkdir -p /home/bookshelf-api
COPY . /home/bookshelf-api
WORKDIR /home/bookshelf-api

RUN npm i pnpm -g

RUN pnpm install
EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "index.js"]
