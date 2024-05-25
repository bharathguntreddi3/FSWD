var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hayan12!@',
    database: 'apr30'
});

exports.con = this.con;;