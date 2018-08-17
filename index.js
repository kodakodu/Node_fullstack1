const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('Products server listening on port 4000');
});