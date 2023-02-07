// const http=require('http');
// http.createServer((req,res)=>{
// res.write("HW! sup");
// res.end();
// }).listen(5000);
let a=10;
let b=20;

console.log('Start');

setTimeout(()=>{
    console.log('middle');
},2000)

setTimeout(()=>{
    console.log('end');
},2000)
console.log(a+b);