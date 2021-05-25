const { createContainer, asClass, asFunction, asValue} = require('awilix');
const config = require('../config');
const app = require('.');
//Controller
const { HomeController, UserController, IdeaController, CommentController, AuthController} = require('../controllers');
//Routes
const Routes = require('../routes');
const { HomeRoute, CommentRoute, UserRoute, IdeaRoute, AuthRoute } = require('../routes/index.route');
//Models
const { User, Comment, Idea } = require('../models');
//repositories
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories');
//Services
const { UserService, IdeaService, CommentService, HomeService, AuthService } = require('../services');
let container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(), 
        config: asValue(config)
    }).register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        AuthService: asClass(AuthService).singleton(),
        CommentService: asClass(CommentService).singleton()
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
        AuthController: asClass(AuthController.bind(AuthController)).singleton()
    }).register({
        HomeRoute: asFunction(HomeRoute).singleton(),
        UserRoute: asFunction(UserRoute).singleton(),
        IdeaRoute: asFunction(IdeaRoute).singleton(),
        CommentRoute: asFunction(CommentRoute).singleton(),
        AuthRoute: asFunction(AuthRoute).singleton()
    }).register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment),
    }).register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    });

module.exports = container;