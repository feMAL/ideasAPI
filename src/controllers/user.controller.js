let _userService = null;

class UserController {
    constructor({UserService}){
        _userService = UserService;
    }

    async get(req, res){
        let {userId} = req.params;
        const user = await _userService.get(userId);
        return res.send(user);
    }

    async getAll(req, res){
        const users = await _userService.getAll();
        return res.send(user);
    }

    async update(req,res){
        let {body} = req;
        let {userId} = req.params;

        const updateUser = await _userService.update(userId,body)
        return res.send(updateUser);
    }

    async delete (req, res){
        let { userId } = req.params;
        const deletedUser = await _userService.delete(userId);
        return res.send(deletedUser);
    }

}

module.exports = UserController;