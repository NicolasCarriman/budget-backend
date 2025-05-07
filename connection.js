import mysql from 'mysql2/promise.js';

export const pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Password"
});
