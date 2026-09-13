
let http = require("http");
console.log(http);

let server = http.createServer((req, res) =>{
    console.log("hello I am server");
    
});

server.listen(800, () =>{
    console.log("server");
    
});