const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.render("index")
})

app.get('/home', (req, res)=>{
    res.json({"name":"Vishal"})
})
app.listen('3000');