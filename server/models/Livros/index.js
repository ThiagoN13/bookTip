const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types

const LivrosSchema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },

  preco: {
    type: Number
  },

  descricao: {
    type: String,
    trim: true
  },

  produtoVendivel: {
    type: Boolean,
    default: false
  },

  criadoPor: {
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
