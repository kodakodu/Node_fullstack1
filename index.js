const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products';

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'react_sql'
});

connection.connect(err => {
    if(err) {
        return err;
    }
})

console.log(connection);

app.use(cors());

app.get('/', (req,res) => {
    res.send('go to /products to see products');
});

app.get('/products', (req,res) => {

});

app.listen(4000, () => {
    console.log('Products server listening on port 4000');
});