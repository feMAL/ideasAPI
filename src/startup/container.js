const { createContainer, asClass, asFunction, asValue} = require('awilix');
const config = require('../config');
const app = require('.');
//Controller
const { HomeController } = require('../controllers');
//Services
const { HomeService } = require('../services');
//Routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes')
//Models
const { User, Comment, Idea } = require('../models');
//repositories
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories');
let container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(), 
        config: asValue(config)
    }).register({
        HomeService: asClass(HomeService).singleton()
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    }).register({
        HomeRoutes: asClass(HomeRoutes).singleton()
    }).register({
        User: asValue(User),
        Comment: asValue(Comment),
        Idea: asValue(Idea)
    }).register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    });

module.exports = container;