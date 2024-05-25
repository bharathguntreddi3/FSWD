var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hayan12!@',
    database: 'apr30'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
    con.end();
})