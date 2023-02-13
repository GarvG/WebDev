// const http=require('http');
// http.createServer((req,res)=>{
// res.write("HW! sup");
// res.end();
// }).listen(5000);


const express=require('express');
const app=express();

const checkURL=require('./api');
app.use(express.json());
const mongoose=require('mongoose');
let Users={};

// app.use(checkURL);
const PORT=5000;

const Userrouter=express.Router();
// base router , Router to use 

app.use('/User',Userrouter);

mongoose.set('strictQuery', true);
const db_link='mongodb+srv://admin:admin1@cluster0.l5imyzb.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(db){
console.log("DB CONNECTED!");
})
.catch(function(err){
    console.error(err);
})

const userSchema=mongoose.Schema({
    name:{}
})


Userrouter
.route('/')
.get()
.post()
.patch()
.delete()

app.get('/home',((req,res)=>{
    // res.send("Home")
    res.sendFile('./views/home.html',{root:__dirname})
}))

app.get('/about',checkURL,((req,res)=>{
    
    res.sendFile('C:/Users/ROG/OneDrive/Desktop/Devtown/Backend/views/About.html')
}))

app.get('/contact',((req,res)=>{
    res.send("Contact")
}))
app.get('/users',(req,res)=>{
    res.send(Users);
})
app.post('/users',(req,res)=>{
    //console.log(req.body);
    res.json({
        "message":"Recived!"
    });
    Users=req.body;
    //console.log(Users);

})


app.patch('/users',(req,res)=>{
   // Users=req.body;
   let datatobeUpdated=req.body;
   for(key in datatobeUpdated)
   {
    console.log(key)
    Users[key]=datatobeUpdated[key];
    console.log(Users,datatobeUpdated[key])
    //console.log(Users);
   }
    res.json({
        "message":"Data Updated"
    })    
    

})
app.listen(PORT,(()=>{
    console.log("SERVER LISTENING ON PORT 5000");
}))
