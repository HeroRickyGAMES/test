var gplay = require('google-play-scraper');
const express = require("express");
const cors = require('cors');
const port = 8080
console.log('meu teste deu bao karai');
const IpMonitor = require('ip-monitor');

const app = express()

app.get('/', (req, res) =>{
	gplay.app({appId: 'com.hrs.flutter.minhasanotacoesextended'})
	.then((value) =>{
		res.send(value);
	});
});

app.listen(port, () => {
const ipMonitor = new IpMonitor({
    pollingInterval: 36000,
    verbose: true,
    externalIp: {
        timeout: 1000,
        getIP: 'parallel',
        services: ['http://ifconfig.co/x-real-ip', 'http://icanhazip.com/'],
        replace: true,
        verbose: true
    }
});


ipMonitor.on('change', (prevIp, newIp) => {
    console.log(`IP changed from ${prevIp} to ${newIp}`);
});

ipMonitor.on('error', (error) => {
    console.error(error);
});

ipMonitor.start();

  console.log(`ip monitor ${ipMonitor}`);
  console.log(`Example app listening on port ${port}`)
})

var moment = require('moment');
var date = moment().format("LL");

console.log(date);