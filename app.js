const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const app = express();

app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());

app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.json());
app.use("/product",productRoutes);


module.exports = app;