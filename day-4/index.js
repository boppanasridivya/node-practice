const mongoose =require("mongoose");
const userSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
});


const Studentmodel = mongoose.model("student", userSchema);


const main = async() =>{
    try{
       mongoose.connect("mongodb://127.0.0.1:27017/college");
       console.log("connected to database");
       await Studentmodel.insertMany([{name : "Divya",age : 20, city: "hyd" }]);
    
    }
    catch(error){
        console.log("connection is failed to connect db");
        console.log(error);
    }
}
main();

 