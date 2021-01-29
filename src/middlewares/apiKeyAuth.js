'use strict';

const Jwt = require('../utils/jwt');

module.exports = async function (req, scopes, schema) {
    const token = req.headers["x-api-key"];
    if (!token) return false;

    const isValid = await Jwt.verify(token);
    return isValid;
}
