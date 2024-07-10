// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Mysql555',
//     database: 'sociedad_protectora_db'
// });

// connection.connect(error => {
//     if (error) throw error;
//     console.log('Conectado a sociedad_protectora_db');
// });

// module.exports = connection;



const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(error => {
    if (error) throw error;
    console.log('Conectado a', process.env.DB_NAME);
});

module.exports = connection;

