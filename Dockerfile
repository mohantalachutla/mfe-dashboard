FROM node:14-alpine

WORKDIR /mfe_dashboard
COPY ./package.json .
RUN npm install

COPY . .
EXPOSE 8000/tcp
ENTRYPOINT [ "npm"]
CMD ["run", "start"]