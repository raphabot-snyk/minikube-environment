FROM node:20-bookworm-slim

COPY app/ /app/

WORKDIR /app

EXPOSE 3000

RUN npm install

ENTRYPOINT [ "npm", "start" ]