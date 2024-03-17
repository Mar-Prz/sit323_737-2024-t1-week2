const express = require("express"); //express is imported
const app = express(); //express is used
const addTwoNumber = (n1, n2) => { //simple functon that takes in two parameters which will be two numbers and adds them together
  return n1 + n2;
};
app.get("/addTwoNumber", (req, res) => { //defines a GET route at the addTwoNumber path with a call back function
  const n1 = parseInt(req.query.n1); //accesses query params from the requested url
  const n2 = parseInt(req.query.n2);
  const result = addTwoNumber(n1, n2); //addTwoNumber function is called with the n1 and n2 values and stored in a variable called result
  res.json({ statusCode: 200, data: result }); //responds with a json object showing the statuscode and the result of the function
});
console.log(addTwoNumber(19, 12)); //calls the function with numberws 19 and 12
const port = 3040; //listens to port 3040
app.listen(port, () => {
  console.log("hello i'm listening to port " + port); // console logs a string that its listening to the port
});
