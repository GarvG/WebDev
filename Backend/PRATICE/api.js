const checkURL=(req,res,next)=>{
    console.warn("current route is :", req.originalUrl)
    next();
}
module.exports=checkURL;