'use strict';

const config = require('config');

module.exports = {
    env: config.get('ENV'),
    server: {
        host: config.get('SERVER.HOST'),
        port: config.get('SERVER.PORT')
    },
    db: {
        mongo: config.get('DB.MONGO')
    },
    user: {
        username: config.get('USER.USERNAME'),
        password: config.get('USER.PASSWORD'),
        cert: config.get('USER.CERT')
    }
}