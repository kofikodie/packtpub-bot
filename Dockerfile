FROM node:14.0.0-alpine3.10
WORKDIR /usr/src/app
RUN yarn set version berry
ADD package.prod.json /usr/src/app/package.json
RUN yarn
ADD ./dist/ /usr/src/app
ADD .env /usr/src/app/.env
