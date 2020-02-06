var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('listarastreio');
});

router.get('/rastreio/', function(req, res, next) {
  res.render('rastreio/rastreio');
});


module.exports = router;
