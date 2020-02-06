var express = require('express');
var router = express.Router();
const fs = require('fs');
let rawdata = fs.readFileSync('./public/backup.json');
let data = JSON.parse(rawdata);

/* GET users listing. */
router.get('/', function(req, res, next) {
 let dataJ = data.data.filter((a) => a._idUser == req.query.codUsuario).map((a) => a.Pacotes);  
  dataJ = dataJ[0];
  if(!dataJ)
  res.render('not_found');
  res.render('listarastreio',{dataJ: JSON.stringify(dataJ)});
});

router.get('/rastreio', function(req, res, next) {
  let dataJ = data.data.map(a => a.Pacotes).reduce((acc,cur) =>   {return acc + cur.map((a) =>a)},[])

  console.log(dataJ);
  if(!dataJ)
  res.render('not_found');
  res.render('rastreio/rastreio');
});


module.exports = router;
