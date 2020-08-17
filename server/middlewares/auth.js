const { verifyToken } = require('../helpers/jwt')

const checkCookie = (req,res,next) => {
    let token = req.cookies.savecookie;
    if (token) {
        req.decoded = verifyToken(token); 
        next();
    }else {
        res.status(400).json({message: "You must login first as user"})
    }
};


module.exports = {checkCookie};