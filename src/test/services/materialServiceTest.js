'use strict';

const MaterialService = require('../../services/materialService');
const Database = require('../../db');

describe('MaterialService Suit Tests', () => {

    const service = new MaterialService();
    const db = new Database();

    beforeEach(async () => await db.start());

    it.skip('getMaterials', async () => await service.getMaterials());

    it.skip('postMaterial', async () => await service.postMaterial({
        name: 'teste',
        quantity: 1,
        user: 'testeteste'
    }));

    it.skip('getMaterial', async () => await service.getMaterial(5));

    it.skip('deleteMaterial', async () => await service.deleteMaterial(5));

    it.skip('updateMaterialQuantity', async () => await service.updateMaterialQuantity(5, { quantity: 10 }));
})