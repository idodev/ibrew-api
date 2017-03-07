#!/bin/bash

docker kill ibrew
docker rm ibrew
docker run --name=ibrew -d --restart=always --net=host -p 3000:3000  idodev/ibrew
