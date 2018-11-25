const express = require('express');
const bodyParser = require("body-parser");
const app = express()
const StarContractController = require('./controller/StarContractController');


//let blockController = new BlockController();
let starContractController = new StarContractController();



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded( {extended: true} ));

app.listen(8000, () => console.log('Decentralized Star Notary servic listening on port 8000!'))

app.get('/', (req, res) => res.send('Star Notaryservic!'))
//app.get("/block/:num", (req, res) =>blockController.getBlock(req, res));
//app.post("/block", (req, res) => blockController.addBlock(req, res));



app.get("/star/:starTokenId", (req, res) => starContractController.findStarByTokenId(req, res));

