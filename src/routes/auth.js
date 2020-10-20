const express = require('express');

const router = express.Router();

router.post('/token', async (req, res) => {
  try {
    return res.status(200).json({
      where: 'get token',
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/token/verify', async (req, res) => {
  try {
    return res.status(200).json({
      where: 'verify token',
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
