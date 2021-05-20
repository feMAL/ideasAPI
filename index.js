const container = require('./src/startup/container');
const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config");

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

mongoose
    .connect(MONGO_URI, { useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.start())
    .catch(console.log);