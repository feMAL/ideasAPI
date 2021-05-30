let _authService = null;

class AuthController {

    constructor({AuthService}){
        _authService = AuthService;
    }

    async singUp(req,res){
        const {query} = req;
        console.log(req.query);
        //console.log(req);
        const createdUser = await _authService.singUp(query);
        res.status(201).send( {ok: true, createUser});
    }

    async singIn(req,res){
        const {body} = req;
        const userLogged = await _authService.singIn(body);
        res.status(200).send({
            ok:true,
            login: userLogged
        });
    }
}

module.exports = AuthController;