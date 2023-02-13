const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
const Connection=require('./utils/dbConnect');
Connection();


app.get('/',(req,res)=>{
    
})





app.listen(process.env.PORT||3000,(()=>{
console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`)
}))

