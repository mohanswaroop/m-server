const express = require('express');
const app=express();

const configCRUDRoute=require('../api/system-config-api');
const blackListCRUDRoute=require('../api/black-list-api');
const whiteListCRUDRoute=require('../api/white-list-api');


app.use('/config',configCRUDRoute);

app.use('/black',blackListCRUDRoute);

app.use('/white',whiteListCRUDRoute);


module.exports = app;
