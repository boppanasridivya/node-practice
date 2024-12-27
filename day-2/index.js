// const http = require("http");
const fs = require("fs")


// const server = http.createServer((req, res) => {
//     if(req.url ==="/"){
//         res.setHeader('Content-Type', 'text/html'); 
//         //setHeader is used to give extra content like cookies or page details anything
//         res.end("<h1>hello guys...!</h1>");
//     }
//     else if(req.url ==="/data"){
//       fs.readFile("./text.txt","utf-8",(err,data)=>{
//         if(err){
//             res.write("Invalid url or enter");
//             res.end(err);
//         }
//         else{
//             res.end(data);
//         }
//       })
    
//     }
//     else if(req.url==="/adddetails" && req.method ==="POST"){
//         let str = "";
//         req.on("data", (chunk)=>{
//             str+=chunk;
//         })
//         req.on("end", () =>{
//             console.log(str);
//         })

//         res.end("Data has been sent successfully");

//     }
//     else{
//         res.end("invalid entry point")
//     }
// })

// server.listen("6090", ()=>{
//     console.log("listening to the port 6090");
// })

//express js

const express = require("express");
const app = express();

app.use(express.json());//it will parse the data inthe req.body and you will be able to get it as and console.og() if needed

// app.get("/", (req,res) =>{
//     res.send("hello guys...!!")
// });
// app.post("/adddetails", (req, res) =>{
//     console.log(req.body);
//    res.send("data has been accepted");

// });

// app.listen("6090", () =>{
//     console.log("listening on the port 6090");
// })

// to change or get the data from db,json
app.get("/studentdetails", (req, res) =>{
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    console.log(data.students);
    res.json(data.students); //convert obkect to json format
})

app.post("/addstudents", (req, res) =>{
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.students.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("data has been added into json file");

})
app.listen("6090", () =>{
    console.log("listening on the port 6090");
})
