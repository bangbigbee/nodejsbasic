const express = require('express')
//const path = require('path');
import configViewEngine from './configs/ViewEngine';
import initWebRoute from './route/web';
// import connection from './configs/connectDB';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

//support sending data to server from clients
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//console.log('>>>check port:', port)

//set up view engine
configViewEngine(app);
//init web route
initWebRoute(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
