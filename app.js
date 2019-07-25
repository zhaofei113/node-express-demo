const express = require('express');
var app = express();

app.use('/user',require('./route/user'));

app.listen('8881',()=>{
    console.log('success');
})




