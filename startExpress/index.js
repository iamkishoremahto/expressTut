const express = require('express');
const app = express();


app.listen(3000,() =>{
    console.log("Listening on port 3000");
});


app.get('/', (req,res) => {
    res.send("Hello, world!");
})

app.get('/home', (req,res) =>{
    res.send("Home Page");
});

app.get('/about',(req,res) =>{
    res.send("About Page")
});

app.get('/contact',(req,res) =>{
    res.status(200).send("Contact Page");
});

