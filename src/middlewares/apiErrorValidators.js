'use strict';

const log = require('../log');

module.exports = (err, req, res, next) => {
    const errorCode = err.status || 500;
    res.status(errorCode)
        .send({
            code: errorCode,
            message: err.message,
            error: errorCode === 500
                ? 'Internal Server Error'
                : err.name
        })

    log.error(err);
}