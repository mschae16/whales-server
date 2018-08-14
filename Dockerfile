# base image
FROM node:latest

# create folder and set working directory
RUN mkdir -p /usr/src/whales/server
WORKDIR /usr/src/whales/server

# add node_modules to the $PATH
ENV PATH /usr/src/whales/server/node_modules/.bin:$PATH

# indicate port to be listened to
EXPOSE 4000

# add source code and install dependencies
COPY . /usr/src/whales/server
RUN npm install --silent

# start the app
CMD ["node", "index.js"]
