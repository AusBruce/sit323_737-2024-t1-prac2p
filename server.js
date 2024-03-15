// var express= require("express")
// var app = express()
// var port = process.env.port || 3000;
// app.listen(port,()=>{
//     console.log("App listening to"+port)
// })
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});