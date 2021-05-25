const { Router } = require('express');

module.exports = function ({AuthController}){
    const route = Router();

    route.post('/singin',AuthController.singIn);
    route.post('/singup',AuthController.singUp);
  
    return route;
};