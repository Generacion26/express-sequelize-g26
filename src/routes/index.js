const express = require('express');
const routerUser = require('./user.route');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", routerUser)


module.exports = router;