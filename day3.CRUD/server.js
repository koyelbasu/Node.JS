const express = require("express");
//middleware for accepting json data
const app = express();

app.use(express.json());

let port = 400;

let users = [{
    name: "Koyel",
    age: 89
}];



// app.get('/', (req, res) =>{
    // res.send(users)
// })

app.post('/create', (req, res)=>{
    let body = req.body;

    users.push(body);

    res.send(users);
})

app.get('/user', (req, res) =>{
    console.log("I am user");
});