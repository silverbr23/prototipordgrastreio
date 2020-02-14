const cf = require('../config/.configs');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  if (req.body.codProduto.length > 0 || req.body.codUsuario.length > 0) {
    if (!req.body.codProduto)
      return res.redirect(`rastreios?codUsuario=${req.body.codUsuario}`);
    return res.redirect(`/rastreios/rastreio?codProduto=${req.body.codProduto}`)
  }

  return res.redirect('/');
});

router.get('/teste', function (req, res, next) {
  fetch(cf.url, { method: 'POST', headers: cf.headers, body: cf.data })
    .then(response => response.json())
    .then(data => {
      res.json(data)
    })
    .catch(err => res.json(err))
});

module.exports = router;
