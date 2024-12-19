const http = require("http"); //import the http
const fs = require("fs") // fs methods we are importing


const server = http.createServer((request, response) => {
    if(request.url === "/"){
        response.end("hello"); //response.end is neccessary without that we don't get info in the request page it will show the recurring page
    }
    else if(request.url === "/reports"){
        response.end("here are the reports");
    }
    else if(request.url === "/data"){
        fs.readFile("./textFile.txt", {encoding:"utf-8"}, (err,data) => {
            if(err){
                response.write("no data \n");
                respond.end(err);
            }
            else{
                response.end(data);
            }
        })

    }
});

server.listen("8080",() =>{
    console.log("listening on the port 8080");
})