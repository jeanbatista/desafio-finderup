'use strict';

const config = require('../config');
const Jwt = require('../utils/jwt');

const UnauthorizedException = require('../exceptions/unauthorizedException');

module.exports = class LoginService {

    async getToken(obj) {
        if (obj.user === config.user.username && obj.password === config.user.password)
            throw new UnauthorizedException('login inválido');

        const token = Jwt.sign();
        const decoded = Jwt.decode(token);
        return {
            token: token,
            issuedAt: new Date(new Date(0)).setUTCSeconds(decoded.iat),
            expiresAt: new Date(new Date(0)).setUTCSeconds(decoded.exp)
        };
    }
}