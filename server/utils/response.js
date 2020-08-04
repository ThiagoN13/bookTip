const cookiesHelper = require('./cookies');

/**
 * Success response
 */
exports.success = (res, resData) => {
  return res.status(200).send({
    success: true,
    data: resData,
  });
}

/**
 * Errors handlers
 */
exports.errors = {
  // Client error's
  unauthorized(res) {
    cookiesHelper.clearTokens(res);
    return res.status(401).send({
      success: false,
      errorMsg: 'Usuário não autorizado',
    });
  },
  badRequest(res, errorMsg) {
    return res.status(400).send({
      success: false,
      errorMsg,
    });
  },
  forbidden(res) {
    cookiesHelper.clearTokens(res);
    return res.status(403).send({
      success: false,
      errorMsg: 'O acesso ao recurso é proibido.',
    });
  },
  notFound(res) {
    return res.status(404).send({
      success: false,
      errorMsg: 'Não encontrado.',
    });
  },
  // Server error's
  internalError(res, error) {
    return res.status(500).send({
      success: false,
      errorMsg: 'Ocorreu um erro interno.',
      debug: error,
    });
  },
};

exports.redirect = {
  withLogout(res) {
    cookiesHelper.clearTokens(res);
    return res.status(401)
    .send({
      success: false,
      errorMsg: 'É necessário está autenticado para acessar.',
    });
  },
};
