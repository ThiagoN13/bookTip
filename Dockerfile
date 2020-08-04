FROM node:12-alpine

WORKDIR ./

COPY . .

RUN npm install --quiet

RUN cd ./public

RUN npm install --quiet

RUN cd ../server

RUN npm install --quiet

RUN cd ..

CMD npm start

EXPOSE 8080

EXPOSE 3000

COPY . .
