#!/bin/bash
set -e

if [ -f .env ]; then
  source .env
else
  echo "The .env file doesnt exist"
  exit 1
fi

docker login --username $GHCR_USER --password $GHCR_PASSWORD ghcr.io
docker build --platform linux/amd64 . -t $GHCR_PATH
docker push $GHCR_PATH