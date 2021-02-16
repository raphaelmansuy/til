# How to deploy an ECS Cluster with the CLI

## Install ECS-CLI

[install ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_installation.html)

```bash
sudo curl -Lo /usr/local/bin/ecs-cli https://amazon-ecs-cli.s3.amazonaws.com/ecs-cli-darwin-amd64-latest
```

### Create a cluster configuration:

```bash
ecs-cli configure --cluster ec2-tutorial --default-launch-type EC2 --config-name ec2-tutorial --region us-west-2
```

```bash
ecs-cli configure profile --access-key AWS_ACCESS_KEY_ID --secret-key AWS_SECRET_ACCESS_KEY --profile-name ec2-tutorial-profile

````

### Create a Public/Prive key pair

```bash
aws ec2 create-key-pair --key-name ecskey --query 'ecskey' --output text > ecs.pem
```

### Create the cluster

```bash
ecs-cli up --keypair ecskey  --capability-iam --size 1 --instance-type t3.micro --cluster-config ec2-tutorial --ecs-profile ec2-tutorial-profile
```

Create a `docker-compose.yml` file

```Dockerfile
version: '3'
services:
  web:
    image: amazon/amazon-ecs-sample
    ports:
      - "80:80"
    logging:
      driver: awslogs
      options:
        awslogs-group: ec2-tutorial
        awslogs-region: us-west-2
        awslogs-stream-prefix: web
```

Create a file `ecs-param.yml`

```Dockerfile
version: 1
task_definition:
  services:
    web:
      cpu_shares: 100
      mem_limit: 524288000
```

### Deploy

```bash
ecs-cli compose up --create-log-groups --cluster-config ec2-tutorial --ecs-profile ec2-tutorial-profile
```

### View the container

```bash
ecs-cli ps --cluster-config ec2-tutorial --ecs-profile ec2-tutorial-profile
```

### Scale the cluster

```bash
ecs-cli compose scale 2 --cluster-config ec2-tutorial --ecs-profile ec2-tutorial-profile
```

### Cleanup

```bash
ecs-cli compose service rm --cluster-config ec2-tutorial --ecs-profile ec2-tutorial-profile
```

```bash
ecs-cli down --force --cluster-config ec2-tutorial --ecs-profile ec2-tutorial-profile
```
