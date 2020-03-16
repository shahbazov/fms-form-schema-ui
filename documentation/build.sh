#!/usr/bin/env bash

NAME=tsahbazoglu/fms-primeng
TAG=latest

#build
docker build -t $NAME:$TAG .

#list
docker images


