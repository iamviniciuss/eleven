const express = require('express');

const routes = express.Router();

// const TweetController = require('./controllers/TweetController');
const UsuarioController = require('./controllers/UsuarioController');
const SalaController = require('./controllers/SalaController');


routes.get('/', (req,res)=>{
    res.send(':) Hello World')
});

routes.get('/usuarios', UsuarioController.index)
routes.get('/usuario/:id/sala/:sala_id', UsuarioController.cartas)

routes.get('/salas', SalaController.index)
// routes.get('/tweets', TweetController.index)
// routes.post('/tweets', TweetController.store);



module.exports = routes;