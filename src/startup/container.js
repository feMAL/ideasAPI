const { createContainer, asClass, asFunction, asValue} = require('awilix');
const config = require('../config');
const app = require('.');
//Controller
const { HomeController } = require('../controllers');
//Services
const { HomeServices } = require('../services');
//Routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes')
let container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(), 
        config: asValue(config)
    }).register({
        HomeService: asClass(HomeServices).singleton()
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    }).register({
        HomeRoutes: asClass(HomeRoutes).singleton()
    });

module.exports = container;