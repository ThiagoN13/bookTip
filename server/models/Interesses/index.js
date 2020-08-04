const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types

const InteressesSchema = new Schema({
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

  valido: {
    type: Boolean,
    default: false
  },

  dataCriacao: {
    type: Date,
    default: Date.now
  },

  dataAlteracao: {
    type: Date
  }
})

const Interesses = mongoose.model('interesses', InteressesSchema)

module.exports = Interesses
