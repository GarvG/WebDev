// const http=require('http');
// http.createServer((req,res)=>{
// res.write("HW! sup");
// res.end();
// }).listen(5000);
// let a=10;
// let b=20;

// console.log('Start');

// setTimeout(()=>{
//     console.log('middle');
// },2000)

// setTimeout(()=>{
//     console.log('end');
// },2000)
// console.log(a+b);

const express=require('express');
const app=express();
const checkURL=(req,res,next)=>{
    console.warn("current route is :", req.originalUrl)
    next();
}

app.use(checkURL);
const PORT=5000;
app.get('/home',((req,res)=>{
    res.send("Home")
}))

app.get('/about',((req,res)=>{
    res.send("About")
}))

// app.get('/contact',((req,res)=>{
//     res.send("Contact")
// }))

app.post('/contact',((req,res)=>{
    res.send("yess")
}))

app.listen(PORT,(()=>{
    console.log("SERVER LISTENING ON PORT 5000");
}))
