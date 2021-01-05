#!/bin/bash

if [ ! -f /app/storage/database.db ]
then
	cp /app/database.db /app/storage/database.db
fi
cd /app
gunicorn --bind 0.0.0.0:40 restApi:app
