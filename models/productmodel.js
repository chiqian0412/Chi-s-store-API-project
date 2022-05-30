const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    }, 
    description:{
        type:String,
        // required:true
    }, 
    img:{
        type:String,
        // required:true
    }, 
    price:{
        type:Number,
        // required:true
    },
    qty:{
        type:Number,
        // required:true
    }
})
// const product = [
//     {name: "Ruby and Diamond 14kt White Gold Earrings",
//      description: "Metal: 14kt White Gold (Rhodium plated); Ruby Shape: Oval;  Ruby Size: Approximately 7 x 5 mm ;Total Diamond Weight: 0.74 ctw; Total Number of Diamonds: 60; Diamond Clarity: Very Slightly Included ( VS2 ); Diamond Color: Near Colorless ( I ); Backing: Push Lock",
//     img: "https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1606294&recipeId=732",
//     price:2499,
//     qty:10},
//     {name: "2", description:"22222",img: "http://img.pokemondb.net/artwork/ivysaur.jpg",price:90,qty:5}   
//  ];
const product = mongoose.model("product",productSchema);

module.exports = product;