const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser());
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.use('/index', require('./route/index'));

// error
app.use(function (err, req, res, next) {
    res.send({
        error: err.stack,
        errno: '500',
    });
})
// 404
app.use(function (req, res, next) {
    res.send({
        error: 'not found1',
        errno: '404',
    });
})
app.listen('8881', () => {
    console.log('success');
})