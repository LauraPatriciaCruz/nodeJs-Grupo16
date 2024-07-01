const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'sociedad_protectora_db'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Conectado a sociedad_protectora_db');
});

module.exports = connection;


