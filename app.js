var gplay = require('google-play-scraper');
const express = require("express");
const cors = require('cors');
var devip = require('dev-ip');
const port = 3000
console.log('meu teste deu bao karai');

const app = express()

app.get('/', (req, res) =>{

	gplay.app({appId: 'com.hrs.flutter.minhasanotacoesextended'})
	.then((value) =>{
		res.send(value);
	});

});

app.listen(port, () => {
  devip();
  console.log(`Server running into ip ${devip()}`)
  console.log(`Example app listening on port ${port}`)
})

var moment = require('moment');
var date = moment().format("LL");

console.log(date);