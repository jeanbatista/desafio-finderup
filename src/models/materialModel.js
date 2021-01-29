'use strict';

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const paginate = require('mongoose-paginate-v2');

const schema = new mongoose.Schema({
    id: Number,
    name: String,
    quantity: Number,
    user: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    }
})

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, {
    model: 'Material',
    field: 'id',
    startAt: 1
});
schema.plugin(paginate);

const model = mongoose.model('Material', schema);

module.exports = model;