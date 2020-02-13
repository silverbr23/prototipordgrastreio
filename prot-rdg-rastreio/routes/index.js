const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {

  if (!req.body.codProduto)
    res.redirect(`rastreios?codUsuario=${req.body.codUsuario}`);

  res.redirect(`/rastreios/rastreio?codProduto=${req.body.codProduto}`)

});

router.get('/teste', function (req, res, next) {
  let url = 'http://sapgrcdev.campo.local:51000/RESTAdapter/proc';
  let auth = Buffer.from('basis:mega@123').toString('base64');
  console.log(auth);
  let headers = {
    "Authorization": `Basic ${auth}`,
    "Content-Type": "text/plain"
  }
  let data = {
   "idUser": "123",
   "Pedido": "321"
  }
  
  fetch(url,{method: 'POST', headers: headers, body:data})
    .then(response => response.json())
    .then(data => {
      res.json(data)
    })
    .catch(err => res.json(err))
});

module.exports = router;
