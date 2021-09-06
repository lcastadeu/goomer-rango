FROM node:14.17.6 AS BUILD_IMAGE

WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm i -s

COPY . .

RUN npm install --quiet --no-optional

FROM node:14.17.6

WORKDIR /usr/src/app

COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules

EXPOSE 3000
