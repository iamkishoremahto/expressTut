const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            writeConcern: {
                w: 'majority'
            }
        });
        console.log('DB Connected');
    }
    catch(error){
        console.log(`DB Connect Failed: ${error.message}`);
    };
   

};

module.exports = dbConnect;