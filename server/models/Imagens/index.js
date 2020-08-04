const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types

const ImagensSchema = new Schema({
  livro: {
    type: ObjectId,
    ref: 'livros',
    required: true
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

const Imagens = mongoose.model('imagens', ImagensSchema)

module.exports = Imagens
