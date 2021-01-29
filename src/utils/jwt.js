'use strict';

const jwt = require('jsonwebtoken');

const log = require('../log');
const config = require('../config');

module.exports = class JWT {

    static async verify(token) {
        try {
            jwt.verify(token, config.user.cert);
            return true;
        } catch (err) {
            return false;
        }
    }

    static sign() {
        const token = jwt.sign(
            { user: config.user.username },
            config.user.cert,
            { expiresIn: '1d' }
        );
        return token;
    }

    static decode(token) {
        const decoded = jwt.decode(token);
        return decoded;
    }
}