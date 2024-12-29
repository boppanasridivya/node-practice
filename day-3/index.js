const express = require("express");
    const app = express();
    const fs =require("fs");

    const {watchMan, logger} = require("./middleWare.js");
// app.use((req, res,next) => {
//    // console.log("activated middelware first");
//     if(req.url ==="/about"){  //if(true)  --> this means it directly refers to the home page means "/" otherwise we need write condition req.url
//         next();
//     }
//     else{
//         console.log("Middleware activity completed");
//     }
//     next();
// });

// app.get("/", (req,res) => {
//     console.log("welcome homes")
//     res.send("Home page");
// });
// app.get("/about", (req,res) => {
//     console.log("About product details");
//     res.send("About page");
// });
// app.get("/cart", (req,res) => {
//     res.send("Cart page");
// });

// app.listen(8070, () =>{
//     console.log("running on port 8070");
// })


// if we want to write middle wore in separate file we can - 2nd code................

app.use(logger);

app.get("/", (req,res) => {
    console.log("welcome homes")
    res.send("Home page");
});
app.get("/about", (req,res) => {
    console.log("About product details");
    res.send("About page");
});
app.get("/cart", (req,res) => {
    res.send("Cart page");
});

app.listen(8070, () =>{
    console.log("running on port 8070");
})


//---------------------*********----------------------to know in which sites users are logging






