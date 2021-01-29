'use strict';

const dateFormat = require('dateformat');

const MaterialRepository = require('../repositories/materialRepository');

const { NotFoundException } = require('../exceptions');

module.exports = class MaterialService {

    #materialRepo = new MaterialRepository();

    async find(params) {
        const result = await this.#materialRepo.find({
            name: params.name,
            user: params.user,
            page: params.page,
            limit: params.limit
        });
        return {
            totalCount: result.totalCount,
            totalPage: result.totalPage,
            results: result.results.map(item => this._mapReturn(item))
        }
    }

    async create(obj) {
        const resourceID = await this.#materialRepo.create({
            name: obj.name,
            quantity: obj.quantity,
            user: obj.user
        });
        return { id: resourceID };
    }

    async findByID(id) {
        const result = await this.#materialRepo.findByID(id);
        if (!result) throw new NotFoundException('Raw material not found');

        const material = this._mapReturn(result);
        return material;
    }

    async delete(id) {
        const result = await this.#materialRepo.findByID(id);
        if (!result) throw new NotFoundException('Raw material not found');

        await this.#materialRepo.delete(id);
        return 'Raw material successfully deleted';
    }

    async updateQuantity(id, obj) {
        const material = await this.#materialRepo.findByID(id);
        if (!material) throw new NotFoundException('Raw material not found');

        material.quantity = obj.quantity;
        material.user = obj.user;
        await this.#materialRepo.updateQuantity(id, material);
        return 'Quantity updated successfully';
    }

    _mapReturn(material) {
        return {
            id: material.id,
            name: material.name,
            quantity: material.quantity,
            user: material.user,
            createdDate: dateFormat(material.createdDate, 'yyyy-mm-dd')
        };
    }
}