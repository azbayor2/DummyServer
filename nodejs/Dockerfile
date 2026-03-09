FROM node:18

WORKDIR /app/nodejs

COPY package*.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 7777

CMD ["yarn", "start"]
