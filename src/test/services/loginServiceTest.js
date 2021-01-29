'use strict';

const LoginService = require('../../services/loginService');
const Database = require('../../db');

describe('LoginService Suit Tests', () => {

    const service = new LoginService();
    const db = new Database();

    beforeEach(async () => await db.start());

    it.skip('getToken', async () => {
        await service.getToken({
            username: "finder",
            password: "up123456"
        })
    });
})