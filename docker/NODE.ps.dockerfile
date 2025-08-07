FROM node:18-alpine AS development
LABEL author="boris.blagojevicc@hotmail.com"

WORKDIR /app

COPY ./services/ts/package*.json .

RUN npm install -g ts-node nodemon typescript cache

COPY /services/ts/src/ .
COPY ./services/ts/tsconfig.json .

CMD npm run dev-docker
