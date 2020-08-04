require('dotenv').config();

const jsonwebtoken = require('jsonwebtoken');
const { jwt } = require('../config/env');

const generateAccessToken = user =>
  jsonwebtoken.sign(
    {
      email: user.email,
      _id: user._id,
    },
    jwt.secret,
    { expiresIn: jwt.access.expiresIn },
  );

const generatetoken = user =>
  jsonwebtoken.sign(
    {
      email: user.email,
      _id: user._id,
    },
    jwt.secret,
    { expiresIn: jwt.refresh.expiresIn },
  );


module.exports.generateAuthTokens = user => ({
  accessToken: generateAccessToken(user),
  token: generatetoken(user),
});
