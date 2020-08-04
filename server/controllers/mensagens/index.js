const Mensagens = require('../../models/Mensagens')
const responseHelper = require('../../utils/response')

const get = (req, res) => {
  const { sort = 'dataCriacao', limit = 10, skip = 0 } = req.query

  Mensagens
    .sort({ [sort]: -1 })
    .limit(Number(limit))
    .skip(Number(skip))
    .lean()
    .then(async (mensagens) => {
      responseHelper.success(res, { itens: mensagens, total: await Mensagens.countDocuments(query) })
    })
    .catch((error) => {
      responseHelper.errors.internalError(res, error)
    })
}

const create = (req, res) => {
  const mensagem = new Mensagens(req.body)

  mensagem.save()
    .then(data => {
      return responseHelper.success(res, data)
    })
    .catch((error) => {
      responseHelper.errors.internalError(res, error)
    })
}

module.exports = {
  create,
  get
}