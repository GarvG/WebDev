const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const Connection=()=>{
    mongoose.connect(process.env.MONGO_URI) .then(() => console.log('Connected Successfully'))
    .catch(error => console.log('Failed to connect', error))
}

module.exports=Connection;