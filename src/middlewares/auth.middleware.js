const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

module.exports = function (req,res,next) {
    let token = req.headers['authorization'];    
    if(!token) {
        let error = new Error();
        error.status = 400;
        error.message = 'Authorization Does not send';
        throw error;
    }

    jwt.verify(token, JWT_SECRET, function(err, decodedToken){
        if(err){
            let error = new Error();
            error.status = 401;
            error.message = 'Invalid token';
            throw error;
        }
        req.user = decodedToken.user;
        next();
    });
}