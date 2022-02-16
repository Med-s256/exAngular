const express = require('express')
const fs  = require('fs')
const cors= require('cors');
const { stringify } = require('querystring');
const bug = require('./listBugs');
const app = express()
app.use(express.json())
app.use(cors('*'));
app.get('/bugs',bug);
app.get('/', (req,res)=>{
    const list = fs.readFileSync('data.json')
    //const data = JSON.stringify(list)
    const data = JSON.parse(list)
    res.send({data});
} )
app.listen(3000);