#!/bin/bash

docker kill ibrew
docker rm ibrew
docker pull idodev/ibrew-api
docker run --name=ibrew -d --restart=always --net=host -p 3000:3000 -e IKETTLE_IP=192.168.0.34 idodev/ibrew-api
