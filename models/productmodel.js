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
//     {name: "Ruby Earrings",
//      description: "Metal: 14kt White Gold (Rhodium plated); Ruby Shape: Oval;  Ruby Size: Approximately 7 x 5 mm ;Total Diamond Weight: 0.74 ctw; Total Number of Diamonds: 60; Diamond Clarity: Very Slightly Included ( VS2 ); Diamond Color: Near Colorless ( I ); Backing: Push Lock",
//     img: "https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1606294&recipeId=732",
//     price:2499,
//     qty:10},
//     {name: "Ruby Necklace", 
//      description:"Oval Approximately 4.5 x 3.5 mm Ruby; Princess Approximately 2.8 mm; 0.11 ctw VS2, I Diamonds; 18" Necklace",
//      img: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1578820-847&recipeName=680",
//      price:1099,
//      qty:5}  
//      {name: "Ruby Ring", 
//      description:"Round Approximately 4.8 mm Ruby; 0.29 ctw VS2, I Diamonds",
//      img: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1360817-847&recipeName=680",
//      price:1599,
//      qty:0}
//      {name: "Ruby Bracelet", 
//      description:"Jewelry Grading/Gemological Report Included; Ruby Size: 4.50 x 4.50 x 2.7 mm; Total Diamond Weight: 4.10 ctw",
//      img: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1696994-847&recipeName=680",
//      price:9999,
//      qty:1}  
//  ];
const product = mongoose.model("product",productSchema);

module.exports = product;