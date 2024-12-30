const express = require("express");

const studentRouter = express.Router();

studentRouter.get("/", (req,res) => {
    res.send("All the student details");
});

studentRouter.post("/addstudent", (req,res) => {
    console.log(req.body);
    res.send("Data has been accepted");
});

module.exports = {studentRouter};