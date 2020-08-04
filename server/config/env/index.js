module.exports = {
  http: {
    port: 3000
  },

  https: {
    port: null
  },

  db: {
    url: 'mongodb+srv://booktip-app:XjHwK2jBxjc6Znn2@cluster0.ccnxk.gcp.mongodb.net/booktip?retryWrites=true&w=majority'
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
