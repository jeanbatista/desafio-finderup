'use strict';

const MaterialRepository = require('../../repositories/materialRepository');
const Database = require('../../db');

describe('MaterialRepository Suit Tests', () => {

    const repository = new MaterialRepository();
    const db = new Database();

    beforeEach(async () => await db.start());

    it.skip('create', async () => {
        await repository.create({
            name: 'Ovo',
            quantity: 3,
            user: 'Ciclano'
        })
    });

    it.skip('find', async () => {
        await repository.find({
            name: "Farinha de Trigo",
            page: 1,
            limit: 20
        })
    })

    it.skip('updateQuantity', async () => {
        await repository.updateQuantity(1, 100);
    })

    it.skip('findByID', async () => await repository.findByID(2));

    it.skip('delete', async () => await repository.delete(2));
})