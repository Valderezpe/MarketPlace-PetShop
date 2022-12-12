module.exports = app =>{
    const route = require('express').Router();
    const userController = require('../controller/user.controller')
    
    router.get('./user', userController.hello)

    app.user ('./api', router)
}