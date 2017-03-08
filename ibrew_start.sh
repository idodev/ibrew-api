#!/bin/bash

docker kill ibrew
docker rm ibrew
docker pull idodev/ibrew-api
docker run --name=ibrew -d --restart=always --net=host -p 3000:3000  idodev/ibrew-api
