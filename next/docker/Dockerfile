FROM node:14.17.5
WORKDIR /usr/src/app
RUN apt-get update
COPY ./next/package*.json ./
RUN npm install