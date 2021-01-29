'use strict';

const controller = require('./base');
const constants = require('../utils/constants');
const MaterialService = require('../services/materialService')

module.exports = class MaterialController {

    static async getMaterials(req, res) {
        try {
            const service = new MaterialService();
            const result = await service.find(req.query);

            res.set('X-Total-Count', result.totalCount);
            res.set('X-Total-Page', result.totalPage);

            res.status(constants.statusCode.SUCCESS.CODE).send(result.results);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    }

    static async postMaterial(req, res) {
        try {
            const service = new MaterialService();
            const result = await service.create(req.body);

            res.status(constants.statusCode.CREATED.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    }

    static async getMaterial(req, res) {
        try {
            const service = new MaterialService();
            const result = await service.findByID(req.params.id, req.body);

            res.status(constants.statusCode.SUCCESS.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    }

    static async deleteMaterial(req, res) {
        try {
            const service = new MaterialService();
            const result = await service.delete(req.params.id)
                ;
            res.status(constants.statusCode.SUCCESS.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    }

    static async patchMaterialQuantity(req, res) {
        try {
            const service = new MaterialService();
            const result = await service.updateQuantity(req.params.id, req.body);

            res.status(constants.statusCode.SUCCESS.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    }
}
