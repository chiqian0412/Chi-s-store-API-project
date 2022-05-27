const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path:"./config.env"
})
const app = require('./app');
const post = 3000;
const productDB = mongoose
    .connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD),{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    .then(() => {
    console.log("DATABASE IS UP AND RUNNING...");
    })

app.listen(post,() =>{
    console.log('Listening on post:',post);
})