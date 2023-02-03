const express = require('express');
const path = require('path');
var app=express();
var cors=require('cors');
const sequelize = require('./util/database');
const Expense = require('./models/expense');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/admin/add-expense',(req,res,next)=>{
//     res.sendFile(path.join(__dirname,'views','index.html'))
// })


const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

sequelize.sync()
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})

app.listen(5000);