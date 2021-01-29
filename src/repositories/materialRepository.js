'use strict';

const MaterialModel = require('../models/materialModel');

module.exports = class MaterialRepository {

    #model = MaterialModel;

    /**
     * 
     * @param {{name:String,page:Number,limit:Number}} params 
     * @returns {Promise<{totalCount:Number,totalPage:Number,results:[{id:number,name:String,quantity:Number,user:String}]}>}
     */
    async find(params) {
        const optionsFilter = {};
        if (params.name) optionsFilter.name = params.name;
        if (params.user) optionsFilter.user = params.user;

        const result = await this.#model.paginate(optionsFilter, {
            page: params.page || 1,
            limit: params.limit || 10
        });

        return {
            totalCount: result.totalDocs,
            totalPage: result.totalPages,
            results: result.docs.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    user: item.user,
                    createdDate: item.createdDate
                };
            })
        };
    }

    /**
     * 
     * @param {Number} id 
     * @returns {Promise<{name:String,quantity:Number,user:String}>}
     */
    async findByID(id) {
        const result = await this.#model.findOne({ id });
        if (!result) return null;

        return {
            id: result.id,
            name: result.name,
            quantity: result.quantity,
            user: result.user
        };
    }

    /**
     * 
     * @param {{ name:string,quantity:Number,user:string }} obj 
     * @returns {Promise<Number>}
     */
    async create(obj) {
        const result = await this.#model.create(obj);
        return result.id;
    }

    /**
     * 
     * @param {Number} id 
     *  @param {{ name:string,quantity:Number,user:string }} obj 
     * @return {Promise<void>}
     */
    async updateQuantity(id, obj) {
        await this.#model.updateOne({ id: id }, obj);
    }

    /**
     * 
     * @param {Number} id 
     * @returns {Promise<void>}
     */
    async delete(id) {
        await this.#model.deleteOne({ id });
    }
}