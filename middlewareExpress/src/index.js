const express  = require('express');
const path = require('path');


const app = express();

const staticPath = path.join(__dirname,"../public");
console.log(staticPath)
app.listen(4000,() =>{
    console.log('listening on port 4000');

});
app.use(express.static(staticPath))

app.get('/home', (req,res) =>{
    res.send("Home Page");
});
// app.get('/')

