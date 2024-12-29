// const watchMan = (req, res,next) => {
//    // console.log("activated middelware first");
//     if(req.url ==="/about"){  //if(true)  --> this means it directly refers to the home page means "/" otherwise we need write condition req.url
//         next();
//     }
//     else{
//         res.send("Middleware activity completed");
//     }

// };

// to calculate the time.....
const fs =require("fs");
const watchMan = (req, res,next) => {
    // console.log("activated middelware first");
  const startTime = new Date().getTime();
  next();
  const endTime = new Date().getTime();
  console.log(endTime - startTime);
 
 };

 const logger = (req, res, next) =>{
    fs.appendFileSync("./logger.txt",  ` \n ${req.method} + ${req.url}`,"UTF-8");
    next();
 }
module.exports = {watchMan,logger};

//---------------------*********----------------------to know in which sites users are logging

