#!/bin/bash

docker kill ibrew-api
docker rm ibrew-api
docker run --name=ibrew -d --restart=always --net=host -p 3000:3000  idodev/ibrew-api
