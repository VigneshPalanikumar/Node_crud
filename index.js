const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uuid = require('uuid');
require('dotenv/config');

app.get('/', (req,res) => {
    res.json("My first node api");
});

//Body parser
app.use(express.json());

//Routing to Persons module
const personRouter = require('./personsRoute');
app.use('/persons', personRouter);

app.listen(2000, () => {
    console.log("Server started on 2000");
});

//DB server creation
mongoose.connect(process.env.MYDB_CONNECTION, (err) => {
    if(err) {
        console.log('DB connection error');
    }
    console.log('DB connection successful');
});