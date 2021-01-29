'use strict';

const logger = require('tracer').console({
    transport: (data) => console.log(data.output)
});

module.exports = class Log {
    static log(err) {
        logger.log(err);
    }

    static trace(err) {
        logger.trace(err);
    }

    static debug(err) {
        logger.debug(err);
    }

    static info(err) {
        logger.info(err);
    }

    static warn(err) {
        logger.warn(err);
    }

    static error(err) {
        logger.error(err);
    }
}