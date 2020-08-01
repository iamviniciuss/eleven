const express = require('express');

const routes = express.Router();

// const TweetController = require('./controllers/TweetController');
const UsuarioController = require('./controllers/UsuarioController');
const SalaController = require('./controllers/SalaController');
const UsuarioModel = require('./models/UsuarioModel');


routes.get('/', (req,res)=>{
    res.send(':) Hello World')
});

routes.get('/usuarios', UsuarioController.index)
routes.get('/usuario/:id/sala/:sala_id', UsuarioController.cartas)

routes.get('/salas', SalaController.index)

routes.post('/autenticate' , async (req, res)=>{
    
    const {email , senha } = req.body
    const usuario = await UsuarioModel.findOne({where: {email:email}})
    
    if(!usuario){
        res.status(401).send({mensagem:'Usuário não existe ou está cancelado.'})
    }

    res.send(usuario)
});



module.exports = routes;