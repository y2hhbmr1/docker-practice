#!/bin/bash

# MongoDB image and version
MONGODB_IMAGE="mongodb/mongodb-community-server"
MONGODB_TAG="7.0-ubuntu2204"

# Container name
CONTAINER_NAME="mongodb"



# Key-value app credentials
KEY_VALUE_DB="key-value-db"
KEY_VALUE_USER="key-value-user"
KEY_VALUE_PASSWORD="key-value-password"


# Root credentials
ROOT_USER="root-user"
ROOT_PASSWORD="root-password"

docker run --rm -d --name $DB_CONTAINER_NAME \
  -e MONGODB_INITDB_ROOT_USERNAME=$ROOT_USER \
  -e MONGODB_INITDB_ROOT_PASSWORD=$ROOT_PASSWORD \
  -e KEY_VALUE_DB=$KEY_VALUE_DB \
  -e KEY_VALUE_USER=$KEY_VALUE_USER \
  -e KEY_VALUE_PASSWORD=$KEY_VALUE_PASSWORD \
  -v ./db-config/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro \
  $MONGODB_IMAGE:$MONGODB_TAG
