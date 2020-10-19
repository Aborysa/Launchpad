FROM node:15.0.1-alpine3.12

COPY ./src ./src
COPY package.json .
COPY yarn.lock .

RUN yarn --production=true --frozen-lockfile --non-interactive

ENTRYPOINT ["yarn", "start"]