const express = require('express');
const aniversariantes = require('./components/aniversariantes');
const funcionarios = require('./components/funcionarios.js');
const onlyphones = require('./components/ramais');
const port = 3000;

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {res.send("you are doing a get on the route /")});

app.get('/aniversariantes', (req, res) => {
    console.log(req.query.birthMonth)
    const birth = req.query.birthMonth;
    res.send(aniversariantes(birth))});

app.get('/funcionarios', (req,res) => {
    const param = req.query.sector;
    res.send(funcionarios(param))});

app.get('/ramais', (req,res) => res.send(onlyphones));

app.listen(port, () => console.log(`Yeap! online on ${port}`));