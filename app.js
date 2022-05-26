const express = require('express');
const productRoutes = require('./routes/productRoutes');
const app = express();

app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());

    
app.use(express.json());
app.use("/product",productRoutes);


module.exports = app;