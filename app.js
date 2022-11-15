const path=require('path');
const express = require('express');
const app = express();

const appPath = path.join(__dirname, '../quotesApp');
app.use(express.static(appPath));
app.get('/',(req,res)=>{
    res.end("hi from express server...")
})

app.listen(8000,()=>{console.log('listening on port 8000')})