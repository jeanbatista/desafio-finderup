'use strict';

const routes = require('express').Router();

const MaterialController = require('../controllers/materialController');
const LoginController = require('../controllers/loginController');

routes.get('/api/v1/materials', MaterialController.getMaterials);
routes.post("/api/v1/materials", MaterialController.postMaterial);
routes.get("/api/v1/materials/:id", MaterialController.getMaterial);
routes.delete("/api/v1/materials/:id", MaterialController.deleteMaterial);
routes.patch("/api/v1/materials/:id/quantities", MaterialController.patchMaterialQuantity);

routes.post("/api/v1/login", LoginController.postLogin);

module.exports = routes;