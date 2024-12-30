const express = require("express");
const app =express();

app.use(express.json());

//import teacher and student
const {studentRouter} = require("./router/student.router");
const {teacherRouter} = require("./router/teacher.router");


//always middleware we need to write it in app.use.. here we are calling studentRouter and teacherRoute
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);

app.get("/", (req,res) =>{
    res.send("Welcome to home page");
})

//--------------------------queries-----------------------------//

app.get("/weather", (req,res) =>{
    const data = {
        delhi : "winter",
        pune : " rainy",
        bangalore : "winter"
    }
    const {city} = req.query;
    const weather = data[city];

    res.send(`it is ${weather} in ${city}`);
})
//-----------------------------------------------------------------///


 app.listen(8070, ()=>{
    console.log("running on port 8070");
 });