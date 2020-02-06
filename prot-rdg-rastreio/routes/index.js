var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {

  if(!req.body.codProduto)
  res.redirect(`rastreios?codUsuario=${req.body.codUsuario}`);

  res.redirect(`/rastreios/rastreio?codProduto=${req.body.codProduto}`)

});

module.exports = router;
