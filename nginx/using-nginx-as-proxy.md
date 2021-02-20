# Using NGINX as a proxy

![Architetcure](architecture.png)

`nginx.conf`

```

upstream client {
  server: client:80
}

upstream backend {
  server: backend:80
}

server {
 listen 80

 location /backend {
    rewrite /backend/(.*) /$1 break;
    proxy_pass http://backend
 }

 location / {
   proxy_pass http://client
 }


}

[Full example of configuration](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

```

Docker configuration NGINX server:

```Dockerfile
FROM nginx

EXPOSE 80

RUN rm /usr/share/nginx/html/*

COPY configs.default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx","-g","daemon off;"]

```

Docker configuration React Client App:

```Dockerfile

FROM node:12.13.0-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "test"]


FROM nginx
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from build /app/build /usr/share/nginx/html
```

Corresponding `default.conf` file

```conf
server {
  listen 80
  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
  }
}
```

Docker file server backend:

```Dockerfile
FROM node:12.13.0-alpine AS alpine
WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm","run","start"]


```


An example of a DockerCompose file

```Dockefile
version "3.8"
  services:
    nginx:
      build:
        dockerfile: Dockerfile
        context: ./nginx
      ports:
        - "80:80"
    client:
      build:
        dockerfile: Dockerfile
        context: ./client
        container_name: client
    backend:
      build: 
        dockefile: Dockerfile
        context: ./backend
        container_name: backend
      env_file:
        - ./env/backend.env
    mongo:
      image: "mongo"
      container_name: "mongo-db"
      ports:
        - "27017-27019:27017-27019"
      volumes:
        - ./db/init-mongo.js://docker-entrypoint-initdb.d/init-mongo.js:ro
        - ./db/mongo-volume:/data/db

```