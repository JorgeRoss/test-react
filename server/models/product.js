var mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var ProductSchema = Schema({
    id: String,
    enabled: Boolean
});

module.exports = mongoose.model('Product', ProductSchema)