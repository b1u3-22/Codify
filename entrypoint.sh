#!/bin/sh

cd /app && serve -p 5002 -s . &
cd /api && python3 restApi.py
