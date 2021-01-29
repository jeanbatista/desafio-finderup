FROM node:14.15.4

WORKDIR /usr/src/app

COPY . .

ENV NODE_ENV=hml, TZ=America/Sao_Paulo

RUN npm install

RUN ls -ls

EXPOSE 3000

CMD [ "npm", "start"]