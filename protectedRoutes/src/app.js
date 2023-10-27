const express = require('express');
require('dotenv').config();
const dbConnect = require('../database/databaseConnect');
const userRouter = require('../routes/userRouters');
const noteRouter = require('../routes/noteRouters');

const app = express();
app.use(express.json());
app.use('/api/user',userRouter);
app.use('/api/note',noteRouter);


app.get('/', (req,res) => {
    res.json({status: 200});
})


const start = async () => {
    try{
        await dbConnect();

        app.listen(process.env.PORT, () =>{
            console.log(`listening on port: ${process.env.PORT}`);
        })
    }
    catch(error){
        console.log(error.message);
    }
}

start();