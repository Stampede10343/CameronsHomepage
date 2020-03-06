FROM node:10.19.0-alpine3.9
WORKDIR /app
VOLUME /app /app/dist
ENTRYPOINT npm install && npm install -g @angular/cli@8.2.7 && ng build --prod
