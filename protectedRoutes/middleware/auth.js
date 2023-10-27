const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
    try {

    let token = req.headers.authorization;
    
    if(token) {
        token = token.split(" ")[1];
        

        let user = jwt.verify(token,process.env.SECRET_KEY);
        
        req.userId = user.userId;
        
        
    }
    else{
        res.status(401).json({message: 'unauthorized user'});
    }

    next();
}
catch(error){
    console.error(error.message);
    res.status(401).json({message: 'unauthorized user'});
}
}

module.exports = auth;