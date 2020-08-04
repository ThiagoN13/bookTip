const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

const Auth = require('../../models/Auth')

const responseHelper = require('../../utils/response')
const cookiesHelper = require('../../utils/cookies')
const jwtHelper = require('../../utils/jwt')
const { jwt } = require('../../config/env')


const get = (req, res) => {
  let query = {}
  const { sort = 'dataCriacao', limit = 10, skip = 0 } = req.query

  if (req.query.nome) query.nome = req.query.nome
  if (req.query.email) query.email = req.query.email

  Auth
    .find(query)
    .sort({ [sort]: -1 })
    .select('-senha')
    .limit(Number(limit))
    .skip(Number(skip))
    .lean()
    .then(async (usuarios) => {
      responseHelper.success(res, { itens: usuarios, total: await Auth.countDocuments(query) })
    })
    .catch((error) => {
      responseHelper.errors.internalError(res, error)
    })
}

const put = async (req, res) => {
  const usuario = await Auth.findById(req.body._id)

  usuario.set({
    email: req.body.email,
    nome: req.body.nome,
    dataAlteracao: new Date()
  })

  if (req.body.senha) {
    const senha = await bcrypt.hash(req.body.senha, jwt.salts)

    usuario.set('senha', senha)
  }

  usuario.save()
    .then(usuario => {
      responseHelper.success(res, usuario)
    })
    .catch((error) => {
      responseHelper.errors.internalError(res, error)
    })
}

const remove = (req, res) => {
  Auth.deleteOne({ _id: req.query._id })
    .then(usuario => {
      responseHelper.success(res, usuario)
    })
    .catch((error) => {
      responseHelper.errors.internalError(res, error)
    })
}

const login = async (req, res) => {
  const { email, senha } = req.body

  if (!email) {
    return responseHelper.errors.badRequest(
      res,
      'Email é obrigatório'
    )
  }

  if (!senha) {
    return responseHelper.errors.badRequest(
      res,
      'Senha é obrigatório'
    )
  }

  try {
    const user = await Auth.findOne({ email })

    if (!user) {
      return responseHelper.errors.badRequest(
        res,
        'E-mail não encontrado'
      )
    }

    const isCorrectPass = await bcrypt.compare(
      senha,
      user.senha
    )

    if (isCorrectPass) {
      const tokens = jwtHelper.generateAuthTokens(user)
      user.token = tokens.token

      await user.save()

      cookiesHelper.setTokens(res, tokens)

      return responseHelper.success(res, { tokens })
    }

    return responseHelper.errors.badRequest(
      res,
      'Senha incorreta'
    )
  } catch (err) {
    return responseHelper.errors.internalError(res, err)
  }
}

const verificarToken = async (req, res, next) => {
  const redirectMethod = req.xhr
    ? responseHelper.errors.forbidden
    : responseHelper.redirect.withLogout

  try {
    const { auth_access } = req.cookies || {}
    const token = auth_access || req.headers.authorization

    if (token) {
      const secret = jwt.secret

      req.user = jsonwebtoken.verify(token, secret)

      
      return next();
    } else {
      req.user = null
      return redirectMethod(res)
    }
  } catch (err) {
    if (req.cookies.auth_refresh) {
      try {
        const secret = jwt.secret
        const user = Auth.findOne({ token: req.cookies.auth_refresh })

        if (!user) return redirectMethod(res)

        const decode = jsonwebtoken.verify(req.cookies.auth_refresh, secret)
        const tokens = jwtHelper.generateAuthTokens(user)

        user.token = tokens.token

        cookiesHelper.setTokens(res, tokens)

        await user.save()

        req.user = decode
        return next()
      } catch (err) {
        return redirectMethod(res)
      }
    } else {
      return redirectMethod(res)
    }
  }
}

const logout = async (req, res) => {
  try {
    if (req.cookies && req.cookies.auth_refresh) {
      const user = await Auth.findOne({
        token: req.cookies.auth_refresh
      })

      if (user) {
        user.token = ''
  
        await user.save()
      }

      res.clearCookie('auth_access')
      res.clearCookie('auth_refresh')
    }

    return responseHelper.success(res)
  } catch (err) {
    return responseHelper.errors.internalError(res, err)
  }
}

const create = async (req, res) => {
  const auth = new Auth(req.body)

  try {
    const tokens = jwtHelper.generateAuthTokens(auth)

    auth.token = tokens.token
    auth.senha = await bcrypt.hash(auth.senha, jwt.salts)

    cookiesHelper.setTokens(res, tokens)

    await auth.save()

    return responseHelper.success(res, auth)
  } catch (error) {
    responseHelper.errors.internalError(res, error)
  }
}

module.exports = {
  verificarToken,
  logout,
  login,
  create,
  get,
  remove,
  put
}