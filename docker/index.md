## A good tutorial

[https://nodejs.org/en/docs/guides/nodejs-docker-webapp/](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## Building an image

```bash
docker build -t raphaelmansuy/node-web-app .
```

## Running the image

```bash
docker run -p 49160:8080 -d raphaelmansuy/node-web-app
```

# Get container ID

$ docker ps

# Print app output

$ docker logs <container id>

# Example

Running on http://localhost:8080

# Enter the container

$ docker exec -it <container id> /bin/bash


aws ecr get-login-password --region us-west-2 | docker login


ECR Repository:

368019910004.dkr.ecr.us-west-2.amazonaws.com/elitizon

## publish

docker tag raphaelmansuy/node-web-app:latest 368019910004.dkr.ecr.us-west-2.amazonaws.com/elitizon/node-web-app:latest 