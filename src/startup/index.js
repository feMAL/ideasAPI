const express = require('express');

let _express = null;
let config = null;

class Server {

    constructor({config, router}){
        _config = config;
        _router = router;
    }

    start() {
        return new Promise((resolve,reject) => {
            _express.listen(_config.PORT, () => {
                console.log(_config);
            });
        });
    }

}

module.exports = Server;