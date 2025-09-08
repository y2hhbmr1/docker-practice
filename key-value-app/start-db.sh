#!/bin/bash

# MongoDB image and version
MONGODB_IMAGE="mongodb/mongodb-community-server"
MONGODB_TAG="7.0-ubuntu2204"

# Container name
CONTAINER_NAME="mongodb"

# Root credentials
ROOT_USER="root-user"
ROOT_PASSWORD="root-password"

docker run -d \
  --name $CONTAINER_NAME \
  --rm \
  -e MONGO_INITDB_ROOT_USERNAME=$ROOT_USER \
  -e MONGO_INITDB_ROOT_PASSWORD=$ROOT_PASSWORD \
  $MONGODB_IMAGE:$MONGODB_TAG