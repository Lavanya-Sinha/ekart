
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const subSchema = new Schema({
    img:String,
    data:String,
    review:String,
    category:String
})

const mainSchema = new Schema({
    arr: [subSchema]
})

const AppModel = mongoose.model('house', mainSchema);

module.exports = AppModel;