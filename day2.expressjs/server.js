const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hey you reachedd here");
});

app.get("/products", (req, res) =>{
    res.send("product hu main");
});

   app.post("/create", (req, res) =>{
    console.log(req);
    
    res.send("ok post it")
   });


let port = 500;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
});