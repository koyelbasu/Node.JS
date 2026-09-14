const express = require("express");

const app = express();

app.use(express.json());
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

let user = [{
    id:1,
    name: "Koyel",
    age: 20
}];

app.get('/users', (req, res) =>{
    res.send(` show the result ${user}`)
})



let port = 4000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
});