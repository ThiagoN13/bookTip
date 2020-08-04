const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LivrosSchema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },

  mensagem: {
    type: String,
    required: true,
    trim: true
  },

  de: {
    type: ObjectId,
    ref: 'auth',
    required: true
  },

  para: {
    type: ObjectId,
    ref: 'auth',
    required: true
  },

  dataCriacao: {
    type: Date,
    default: Date.now
  },

  dataAlteracao: {
    type: Date
  }
})

const Livros = mongoose.model('livros', LivrosSchema)

module.exports = Livros
