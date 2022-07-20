const express = require('express')
//const path = require('path');
import configViewEngine from './configs/ViewEngine';
import initWebRoute from './route/web';
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000;
//console.log('>>>check port:', port)

//set up view engine
configViewEngine(app);
//init web route
initWebRoute(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
