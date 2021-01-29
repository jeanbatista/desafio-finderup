'use strict';

const controller = require('./base');
const constants = require('../utils/constants');
const LoginService = require('../services/loginService');

module.exports = class LoginController {

    static async postLogin(req, res) {
        try {
            const service = new LoginService();
            const result = await service.getToken(req.body);

            res.status(constants.statusCode.SUCCESS.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    }
}