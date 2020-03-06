FROM node:10.19.0-alpine3.9
WORKDIR /app
VOLUME /app /app/dist
ENTRYPOINT npm install && export PATH=$PATH:/app/node_modules/.bin \
    && ng build --prod
