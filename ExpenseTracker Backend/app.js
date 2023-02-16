const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt')
var app=express();
var cors=require('cors');
const sequelize = require('./util/database');
const Expense = require('./models/expense');
const User = require('./models/user');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));



const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);



const userRoutes = require('./routes/user');
app.use('/user', userRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

sequelize.sync()
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})


app.listen(5000);