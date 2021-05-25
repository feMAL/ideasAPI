const { sign } = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

module.exports.generateToken = (user) => {
    return sing(user,JWT_SECRET,{expiresIn:"4h"});
}