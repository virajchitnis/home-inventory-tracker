FROM ubuntu:18.04

EXPOSE 80 3000

VOLUME [ "/srv/mongodb" ]

RUN apt-get update
RUN apt-get install -y curl mongodb lighttpd
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

RUN rm /var/www/html/index.lighttpd.html
COPY frontend/dist/ /var/www/html/

RUN mkdir /srv/backend
COPY backend/ /srv/backend/
RUN rm -rf /srv/backend/node_modules
RUN cd /srv/backend && npm install

COPY docker-startup.sh /bin/docker-startup.sh

CMD ["/bin/docker-startup.sh"]