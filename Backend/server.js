const http=require('http');
http.createServer((req,res)=>{
res.write("HW! sup");
res.end();
}).listen(5000);

