const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthSchema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  senha: {
    type: String,
    trim: true,
    required: true
  },

  token: {
    type: String
  },

  dataCriacao: {
    type: Date,
    default: Date.now
  },

  dataAlteracao: {
    type: Date
  }
})

const Auth = mongoose.model('auth', AuthSchema)

module.exports = Auth
