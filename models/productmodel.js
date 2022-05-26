const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
    }, 
    description:{
        type:String,
    }, 
    img:{
        type:String,
    }, 
    price:{
        type:Number,
    },
    qty:{
        type:Number,
    }
})

const product = mongoose.model("product",productSchema);

module.exports = product;