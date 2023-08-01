const { getAll, create, getOne, remove, update, login } = require('../controllers/user.controller');
const express = require('express');

const routerUser = express.Router();

routerUser.route('/')
    .get(getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

// -------------------------------------------


routerUser.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);


module.exports = routerUser;