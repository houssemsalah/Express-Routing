const SayHi=(req,res,next)=>{
    console.log('Hello')
    next()
}


module.exports = SayHi