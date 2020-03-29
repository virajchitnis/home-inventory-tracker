#!/bin/bash

cd frontend
ember build --prod
cd ..
docker build -t virajchitnis/home-inventory-tracker .