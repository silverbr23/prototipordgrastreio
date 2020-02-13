var express = require('express');
var router = express.Router();
const fs = require('fs');
const fetch = require('node-fetch');
let rawdata = fs.readFileSync('./public/backup.json');
let data = JSON.parse(rawdata);

/* GET users listing. */
router.get('/', function (req, res, next) {

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

  fetch(url, { method: 'POST', headers: headers, body: data })
    .then(response => response.json())
    .then(data => {

      let dataJ = data.MT_Resp.Data.filter((a) => a.idUser == req.query.codUsuario).map((a) => a.Pacotes);

      dataJ = dataJ[0];
      if (!dataJ)
        res.render('not_found');
      res.render('listarastreio', { dataJ: JSON.stringify(dataJ) });


    })
    .catch(err => res.json(err))



});

router.get('/rastreio', function (req, res, next) {
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

        let dataJ = data.MT_Resp.Data.map(a => a.Pacotes).reduce((acc, cur) =>[...acc, ...cur].filter((a)=>a.id == req.query.codProduto), [])
        dataJ = dataJ[0];
        
        if (!dataJ)
          res.render('not_found');    
        res.render('rastreio/rastreio', {data:dataJ});
      

      })
      .catch(err => res.json(err))
 
});


module.exports = router;
