const express = require('express')
//const path = require('path');
import configViewEngine from './configs/ViewEngine';
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000;
//console.log('>>>check port:', port)

configViewEngine(app);

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/index.html'));
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
