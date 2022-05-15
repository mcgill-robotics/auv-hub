FROM nginx

WORKDIR /usr/share/nginx
COPY dist html
