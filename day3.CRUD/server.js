const express = require("express");
//middleware for accepting json data
const app = express();
//middleware for accepting json data
app.use(express.json());

let port = 400;

let users = [{
    name: "Koyel",
    age: 89
}];

//get = read
 app.get('/', (req, res) =>{
    res.send(users)
 })


 //post = create
app.post('/create', (req, res)=>{
    let body = req.body;

    users.push(body);

    res.send("user saved successfully");
})

//put = update
app.put("/update/:id" , (req, res) =>{
    let {id} = req.params;

    let updateUser = users.map((val)=> val.id === id? {id, name : "unchanged", age: 90} : val);
    res.send(updateUser);
});

//delete = delete
app.delete("/delete/:id" , (req, res) =>{
    let {id} = req.params;
    let userData = users.filter((val) => val.id !== id);
    users = userData;
    res.send(users);
});

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})