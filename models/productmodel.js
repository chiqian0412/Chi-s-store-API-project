const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    description:{
        type:String,
        required:true
    }, 
    img:{
        type:String,
        required:true
    }, 
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
        required:true
    }
})
// const product = [
//     {name: "1", description:"11111",img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",price:99,qty:10},
//     {name: "2", description:"22222",img: "http://img.pokemondb.net/artwork/ivysaur.jpg",price:90,qty:5}
    
//  ];
const product = mongoose.model("product",productSchema);

module.exports = product;