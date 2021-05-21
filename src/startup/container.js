const { createContainer, asClass, asFunction, asValue} = require('awilix');
const config = require('../config');
const app = require('.');
//Controller
const { HomeController, UserController, IdeaController, CommentController } = require('../controllers');
//Routes
const Routes = require('../routes');
const { HomeRoutes } = require('../routes/index.routes');
//Models
const { User, Comment, Idea } = require('../models');
//repositories
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories');
//Services
const { UserService, IdeaService, CommentService, HomeService } = require('../services');
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
        CommentService: asClass(CommentService).singleton()
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton()
    }).register({
        HomeRoutes: asClass(HomeRoutes).singleton()
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