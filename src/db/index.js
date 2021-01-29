'use strict';

const mongoose = require('mongoose');

const config = require('../config');
const log = require('../log');

module.exports = class Database {

    async start() {
        await this._mongoSetup();
        log.log('DB connected!');
    }

    async _mongoSetup() {
        await mongoose.connect(config.db.mongo, {
            useNewUrlParser: true,
            autoReconnect: false,
            useUnifiedTopology: true,
            retryWrites: true,
            poolSize: 3
        });
    }
}