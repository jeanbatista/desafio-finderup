'use strict';

module.exports = {
    users: {
        UNAUTHORIZED_USER: 'Usuário inválido'
    },
    statusCode: {
        SUCCESS: { CODE: 200, TEXT: 'Success' },
        CREATED: { CODE: 201, TEXT: 'Created' },
        UNPROCESSABLE_ENTITY: { CODE: 422, TEXT: 'Unprocessable Entity' },
        NOT_FOUND: { CODE: 404, TEXT: 'Not Found' },
        UNAUTHORIZED: { CODE: 401, TEXT: 'Unauthorized' },
        INTERNAL_SERVER_ERROR: { CODE: 500, TEXT: 'Internal Server Error' },

        INTERNAL_SERVER_ERROR_SUPPORT: 'Consulte o suporte técnico'
    }
}