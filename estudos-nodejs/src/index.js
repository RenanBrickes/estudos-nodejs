const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const db = require('mongoose');
app.use(express.json()) ;// for parsing application/json
app.use(cors());
app.use(express.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded
server.listen(3333);
db.connect('mongodb+srv://teste:teste@cluster0-qontq.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
});
app.use(require('./rotas'));
