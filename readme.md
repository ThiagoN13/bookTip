
## Aplicação desenvolvida em

 - NodeJS
 - MongoDB
 - VueJS 

## Rodar aplicação separadamente

  $ cd ./server
  $ npm start
  $ cd ./app
  $ npm run dev

## Rodar aplicação normalmente

  $ npm run build
  $ npm start
  
## Rodar com docker
  :thumbsdown:	Ainda não funciona

  $ sudo docker build -t appjs .
  $ sudo docker run appjs --expose 8080