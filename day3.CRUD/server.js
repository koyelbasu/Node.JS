const express = require("express");

const app = express();

app.use(express.json());

let port = 400;

let users = [{
    name: "Koyel",
    age: 89
}];

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});

//app.get('/', (req, res) =>{
//    res.send(users)
//})

app.post('/create', (req, res)=>{
    let body = req.body;

    users.push(body);

    res.send(users);
})  
 
