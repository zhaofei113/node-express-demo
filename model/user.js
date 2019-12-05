const Db = require('../lib/db');

function getUser(sql, params, callback) {
    Db.query(sql, params, callback);
}
module.exports.getUser = getUser;