var express = require("express")
var app = express()
var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})

/* 
This code snippet imports the express library into the server.js file
the express function is then called as a variable app, this can be further used to configure the server and receive requests and send responses
The port is then defined to 3000 so it will be running on localhost:3000
and to see if it is working we console log a string that the app is listen to the port number
*/