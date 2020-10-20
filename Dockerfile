FROM node:12.18.1-alpine
WORKDIR /home/node/app
COPY yarn.lock package.json ./
RUN yarn
ENV PATH="/home/node/app/node_modules/.bin:$PATH"
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["/usr/bin/entrypoint.sh"]
CMD [ "yarn", "start" ]
