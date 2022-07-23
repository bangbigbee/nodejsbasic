// get the client
//const mysql = require('mysql2'); old format command
import mysql from 'mysql2/promise';

// create the connection to database
console.log("Creating connection pool...");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
    //password: 'password'
})
export default pool;