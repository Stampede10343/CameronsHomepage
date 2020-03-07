FROM node:13.10-alpine
WORKDIR /app
VOLUME /app /app/dist
ENTRYPOINT npm install && export PATH=$PATH:/app/node_modules/.bin \
    && ng build --prod
