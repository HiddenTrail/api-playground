FROM mhart/alpine-node:8

WORKDIR /app
COPY . .

RUN yarn install

EXPOSE 3030
CMD ["yarn", "run", "start", "--host", "0.0.0.0", "--disable-host-check"]
