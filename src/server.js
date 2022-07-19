const express = require('express')
//const path = require('path');
import configViewEngine from './configs/ViewEngine'
const app = express()
const port = 3000

configViewEngine(app);

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/index.html'));
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
