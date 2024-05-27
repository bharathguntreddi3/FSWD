require('dotenv').config();

var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD, // your password
    // password is encrypted and stored in .env file
    database: 'apr30'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
    con.end();
})