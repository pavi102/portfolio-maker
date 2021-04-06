const express = require("express");
const morgan = require("morgan");

const app = express();  

const PORT = process.env.PORT || 5000; 

app.use(express.json());    
app.use(morgan("dev"));     

app.get("/", (req, res) => {   
  return res.send("Backend works");

});

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});