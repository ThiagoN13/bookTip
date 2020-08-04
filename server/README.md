## Scripts
* **dev**: Comece no modo dev. Executar observador nodemon,
* **start**: Iniciar instância do servidor de produção

## Como usar

1. Instalar as dependencias

```bash
yarn
```

ou, caso esteja usando o npm

```bash
npm i
```


2. Rode o mongo e altere nas configurações do projeto /config/env/{{enveriment}} "enveriment" qual ambiente você está.

```
 db: {
    url: 'mongodb://localhost:27017/app'
  }
```

3. Inicia o servidor

```bash
yarn dev
```

ou, caso esteja usando o npm

```bash
npm run dev
```
