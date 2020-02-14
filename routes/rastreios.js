const cf = require('../config/.configs');
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  fetch(cf.url, { method: 'POST', headers: cf.headers, body: cf.data })
    .then(response => response.json())
    .then(data => {
      let dataJ = data.MT_Resp.Data.filter((a) => a.idUser == req.query.codUsuario).map((a) => a.Pacotes);

      dataJ = dataJ[0];
      for(x of dataJ){
        x.ACAO =`<a href='/rastreios/rastreio?codProduto=${x.id}' class='btn btn-info active'  aria-disabled='true' role='button' ><i class='fas fa-search-location'></i> Ver Pacote</a>`;
    }
  
      if (!dataJ)
        return res.render('not_found');
      res.render('listarastreio', { dataJ: JSON.stringify(dataJ) });


    })
    .catch(err => res.json(err))


});

router.get('/rastreio', function (req, res, next) {
  fetch(cf.url, { method: 'POST', headers: cf.headers, body: cf.data })
    .then(response => response.json())
    .then(data => {

      let dataJ = data.MT_Resp.Data.map(a => a.Pacotes).reduce((acc, cur) => [...acc, ...cur].filter((a) => a.id == req.query.codProduto), [])
      dataJ = dataJ[0];

      if (!dataJ)
        return res.render('not_found');
      res.render('rastreio/rastreio', { data: dataJ });


    })
    .catch(err => res.json(err))

});


module.exports = router;
