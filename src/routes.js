const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');
const UserController = require('./controllers/UserController');


routes.get('/', (req,res)=>{
    res.send(':) Hello World')
});

routes.get('/tweets', TweetController.index)
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LikeController.store);

routes.post('/users' , UserController.store);
routes.post('/user_login' , UserController.login);

module.exports = routes;