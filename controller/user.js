const Db = require('../lib/db');
const Logs = require('../lib/log');
const http = require('http');
const request = require('request');
class User {
    constructor() {}
    auth(req, res, next) {
        if (!req.session.islogin) {
            res.send({
                errno: 1,
                error: '请先登陆'
            });
        }
        next();
    }
    async login(req, res) {
        try {
            Logs.write(JSON.stringify({
                req: req.query
            }));
            if (!!req.session.islogin) {
                res.send({
                    errno: 1,
                    error: '你已经登陆'
                });
                return;
            }
            const name = req.query.name;
            const password = req.query.password;
            const sql = 'select * from user where user = ? and password = ?';
            const param = [name, password];

            const result = await Db.query(sql, param);
            if (result.length > 0) {
                req.session.islogin = 1;
                res.send({
                    errno: 0,
                    error: '登陆成功'
                });
            } else {
                res.json({
                    errno: 2,
                    error: '账号密码错误'
                });

            }
        } catch (e) {
            res.send({
                error: e.message
            });
        }
    }
    async logout(req, res) {
        let result = {};
        if (!!req.session.islogin) {
            req.session.islogin = 0;
            result = {
                errno: 0,
                error: '登出成功'
            }
        } else {
            result = {
                errno: 1,
                error: '未登陆'
            };
        }
        res.send(result);
    }
    async register(req, res) {
        const name = req.query.name;
        const password = req.query.password;
        try {
            let sql = 'select * from user where user = ?';
            let result = await Db.query(sql, [name]);
            if (result.length > 0) {
                res.send({
                    errno: 1,
                    error: '用户已经存在'
                });
                return;
            }
            sql = 'INSERT INTO user (user,password) VALUE (?,?)';
            result = await Db.insert(sql, [name, password]);
            res.send({
                id: result,
                errno: 0,
                error: '注册成功'
            });
        } catch (e) {
            res.send(e);
        }
    }

    async changePwd(req, res) {
        const name = req.query.name;
        const password = req.query.password;
        const newpwd = req.query.newpwd;
        try {
            let sql = 'select * from user where user = ? and password = ?';
            let result = await Db.query(sql, [name, password]);
            if (result.length <= 0) {
                res.send({
                    errno: 2,
                    error: '账号密码错误'
                });
            }
            sql = 'UPDATE user SET password = ? where id = ?';
            result = await Db.update(sql, [newpwd, result[0].id]);
            res.send({
                errno: 0,
                error: '更新成功'
            });
        } catch (e) {
            res.send(e);
        }
    }

    async deleteUser(req, res) {
        const name = req.query.name;
        const password = req.query.password;
        try {
            let sql = 'select * from user where user = ? and password = ?';
            let result = await Db.query(sql, [name, password]);
            if (result.length <= 0) {
                res.send({
                    errno: 2,
                    error: '账号密码错误'
                });
            }
            sql = 'delete from user where id = ?';
            result = await Db.query(sql, [result[0].id]);
            res.send({
                errno: 0,
                error: '删除成功'
            });
        } catch (e) {
            res.send(e);
        }
    }
    test(req1, res1) {
        const postData = JSON.stringify({
            ipList: ["10.10.12.65"]
        });
        const options = {
            hostname: 'rest.stable.missfresh.net',
            port: 80,
            path: '/search/ipList',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        };
        const req = http.request(options, (res) => {
            let aa = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                aa += chunk
            });
            res.on('end', () => {
                res1.send(aa);
            });
        });
        req.on('error', (e) => {
            console.error(`请求遇到问题: ${e.message}`);
        });
        // 将数据写入请求主体。
        req.write(postData);
        req.end();
    }
    node(req, res) {
        const url = 'http://mcloud.missfresh.net/nodes';
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": "_cluster=TC; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==",
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
}
module.exports = User;