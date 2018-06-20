# Dino fact generator
## Dockerized Node server

This is a small server which provides dinosaur facts.

### Up and running

**Install dependencies**

```sh
$ npm install
```

**Start the application**

```sh
$ npm start
```

**Build the docker image**

```sh
$ docker build -t dinojs/server .
```

**Run the image**

```sh
$ docker run -d -p 4000:4000 dinojs/server
```

### Usage

**/hello**

Health check.

```sh
$ curl localhost:4000/hello
```

**/facts/dino**

Returns a dinosaur fact.

```sh
$ curl localhost:4000/facts/dino
```
