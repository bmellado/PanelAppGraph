/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const express = require('express');
const orm = require('../../sequelize/models');
const { verifyUserPassword } = require('../helpers/utils');

const router = express.Router();
const { JWT_SECRET_KEY } = process.env;

router.post('/token', async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await orm.User.findAll({
      where: { email },
    });
    const token = verifyUserPassword(user, password);
    if (token) {
      return res.status(200).json({
        token,
      });
    }
    return res.status(503).send('Clave incorrecta');
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/token/verify', async (req, res) => {
  try {
    const { token } = req.params;
    jwt.verify(token, JWT_SECRET_KEY, (err, verifiedRes) => {
      if (err) {
        res.status(502).send('Token invalido');
      }
      return res.status(200).send(verifiedRes);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/token/refresh', async (req, res) => {
  try {
    return res.status(200).json({
      where: 'refresh token',
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/reset-password', async (req, res) => {
  try {
    return res.status(200).json({
      where: 'reset password',
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
