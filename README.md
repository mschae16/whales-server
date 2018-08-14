# Whale Fact Generator
## Dockerized Node server

This is a small server which provides whale facts.

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
$ docker build -t whales/server .
```

**Run the image**

```sh
$ docker run -d -p 4000:4000 whales/server
```

### Usage

**/hello**

Health check.

```sh
$ curl localhost:4000/hello
```

**/facts/whale**

Returns a whale fact.

```sh
$ curl localhost:4000/facts/whale
```
