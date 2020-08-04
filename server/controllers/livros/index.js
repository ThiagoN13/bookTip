const Livros = require('../../models/Livros')
const responseHelper = require('../../utils/response')

const get = (req, res) => {
  const { sort = 'dataCriacao', limit = 10, skip = 0 } = req.query

  Livros
    .find()
    .sort({ [sort]: -1 })
    .limit(Number(limit))
    .skip(Number(skip))
    .lean()
    .then(async (livros) => {
      responseHelper.success(res, { itens: livros, total: await Livros.countDocuments() })
    })
    .catch((error) => {
      responseHelper.errors.internalError(res, error)
    })
}

const put = (req, res) => {
  Livros.update({ _id: req.body._id }, { $set: req.body })
    .then(mensagem => {
      responseHelper.success(res, mensagem)
    })
    .catch((error) => {
      responseHelper.errors.internalError(res, error)
    })
}

const remove = (req, res) => {
  Livros.deleteOne({ _id: req.query._id })
    .then(mensagem => {
      responseHelper.success(res, mensagem)
    })
    .catch((error) => {
      responseHelper.errors.internalError(res, error)
    })
}

const create = (req, res) => {
  const livro = new Livros(req.body)
 
  livro.save()
    .then(data => {
      return responseHelper.success(res, data)
    })
    .catch((error) => {
      responseHelper.errors.internalError(res, error)
    })
}

module.exports = {
  create,
  get,
  remove,
  put
}