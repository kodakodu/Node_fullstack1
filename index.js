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

//console.log(connection);

app.use(cors());

app.get('/', (req,res) => {
    res.send('go to /products to see products');
});

app.get('/products/add', (req,res) => {
    const {name, price} = req.query;
    const INSERT_PRODUCTS_QUERY = `INSERT INTO products (name,price) VALUES('${name}', ${price})`;
    connection.query(INSERT_PRODUCTS_QUERY, (err,results) => {
        if(err){
            return res.send(err)
        }
        else {
            return res.send('successfully added product')
        }
    });
    res.send('adding product');
});

app.get('/products', (req,res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            })
        }

    });
});

app.listen(4000, () => {
    console.log('Products server listening on port 4000');
});