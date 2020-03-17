#!/usr/bin/env bash

NAME=tsahbazoglu/fms-primeng

TAG=latest

# docker run -p 8080:8080 --name primeng -t -i $NAME

docker run -p 8080:8080 -v /home/telman/git/fms-form-schema-ui:/home/fms/angular --name primeng -t -i $NAME

