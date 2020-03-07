const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const sequelize = require('./sequelize');
const UsuarioModel = require('./models/UsuarioModel');
const CartaModel = require('./models/CartaModel');
const BaralhoModel = require('./models/BaralhoModel');
const SalaModel = require('./models/SalaModel');
const BaralhoHasCartaModel = require('./models/BaralhoHasCartaModel');
const SalaHasUsuarioModel = require('./models/SalaHasUsuarioModel');

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect("mongodb://goweek:goweek123@ds121475.mlab.com:21475/goweek-mongo",{
    useNewUrlParser:true
});

app.use(cors());
app.use((req,res, next)=>{
    req.io = io;
    return next();
})
app.use(express.json())
app.use(require('./routes'))

var porta = process.env.PORT || 8080;

server.listen(porta, ()=>{
    console.log(`Server Inicializado na porta ${porta}`)
})