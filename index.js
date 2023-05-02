const express=require('express')
const app=express();
const cors = require('cors')
const port=process.env.PORT|| 5000;
const catagories=require('./data/catagories.json');

app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/catagories',(req,res)=>{
    res.send(catagories);
})

app.listen(port,()=>{
    console.log(`example app listing on port :${port}`)
})