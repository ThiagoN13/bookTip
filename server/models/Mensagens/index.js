const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types

const MensagemSchema = new Schema({
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

const Mensagens = mongoose.model('mensagens', MensagemSchema)

module.exports = Mensagens
