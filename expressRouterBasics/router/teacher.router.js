const express = require("express");

const teacherRouter = express.Router();

teacherRouter.get("/", (req,res) => {
    res.send("All the teacher details");
});

teacherRouter.post("/addteacher", (req,res) => {
    console.log(req.body);
    res.send("Data has been accepted");
});

module.exports = {teacherRouter};