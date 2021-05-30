const { generateToken } = require('../helpers/jwt.helper');
let _userService = null

class AuthService {
    
    constructor({UserService}){
        _userService = UserService;
    }

    async singIn(user){
        const {username, password} = user;
        if(!username || !password){
            const error = new Error();
            error.status = 400;
            error.message = 'User o Pass Wrong';
            throw error;
        }
        const userExist = await _userService.getUserByUsername(username);
        if(!userExist){
            const error = new Error();
            error.status = 404;
            error.message = 'User o Pass Wrong';
            throw error;
        }
        let validPass = user.comparePasswords(password);
        if(!validPass){
            const error = new Error();
            error.status = 401;
            error.message = 'User o Pass Wrong';
            throw error;
        }

        const userEncoded = {
            username: userExist.username,
            id: userExist._id
        };

        const token = generateToken(userEncoded);
        return {token, user: userExist};
    }

    async singUp(user){
        const { username } = user;
        console.log(username);
        const userExist = await _userService.getUserByUsername(username);
        
        console.log(userExist);
        if(userExist){
            const error = new Error();
            error.status = 403;
            error.message = 'User already exists';
            throw error;
        }
        return await _userService.create(user);
    }
}

module.exports = AuthService;