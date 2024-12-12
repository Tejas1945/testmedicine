const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

//middlewares
app.use(bodyParser.json());

//Routes
const categoryRoute = require('./routes/category');
const productsRoute = require('./routes/products');

app.use(express.json());
app.use('/api/category', categoryRoute);
app.use('/api/products', productsRoute);
//Database
mongoose.connect(process.env.CONNECTION_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database connected...');
        //server
        app.listen(process.env.PORT, () => {
            console.log(`Server is running http://localhost:${process.env.PORT}`);
        })
    })
    .catch((err) => {console.log(err);})


