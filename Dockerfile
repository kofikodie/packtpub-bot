FROM node:14.3.0-alpine3.10
WORKDIR /usr/src/app
RUN yarn set version berry
ADD package.json /usr/src/app/package.json
RUN yarn plugin import workspace-tools
RUN yarn workspaces focus --production  
ADD ./dist/ /usr/src/app
ADD .env /usr/src/app/.env
