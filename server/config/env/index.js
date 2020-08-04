module.exports = {
  http: {
    port: 3000
  },

  https: {
    port: null
  },

  db: {
    url: 'mongodb+srv://app-estados:eRx1Kl2fwljHPg3w@cluster0.itrd5.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
  },

  ssl: {

  },

  socket: {
    port: 3001
  },

  jwt: {
    salts: 10,
    secret: 'esegredo',
    access: {
      type: 'access',
      expiresIn: '30m',
    },
    refresh: {
      type: 'refresh',
      expiresIn: '1h',
    }
  }
}
