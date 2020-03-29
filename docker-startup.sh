#!/bin/bash

mongod --dbpath /srv/mongodb/ &
cd /srv/backend && npm start &
lighttpd -D -f /etc/lighttpd/lighttpd.conf