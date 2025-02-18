FROM mhart/alpine-node:12

WORKDIR /app
COPY . .

RUN yarn add swagger-jsdoc swagger-ui-express && yarn install

EXPOSE 3030
CMD ["yarn", "run", "start", "--host", "0.0.0.0", "--disable-host-check"]
