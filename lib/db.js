const mysql = require('mysql');
const databaseConfig = require('../config/db');

async function query(sql, params) {
    return new Promise(function (resolve, reject) {
        const connection = mysql.createConnection(databaseConfig);
        connection.connect(function (err) {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, function (err, results) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.end();
                resolve(results);
            });
        });
    })
}
async function insert(sql, params) {
    return new Promise(function (resolve, reject) {
        const connection = mysql.createConnection(databaseConfig);
        connection.connect(function (err) {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, function (err, results) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.end();
                resolve(results.insertId);
            });
        });
    })
}
async function update(sql, params) {
    return new Promise(function (resolve, reject) {
        const connection = mysql.createConnection(databaseConfig);
        connection.connect(function (err) {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, function (err, results) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.end();
                resolve(results);
            });
        });
    })
}
module.exports.query = query;
module.exports.insert = insert;
module.exports.update = update;