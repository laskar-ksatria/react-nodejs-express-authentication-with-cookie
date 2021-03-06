const {generateToken} = require('../helpers/jwt');

class UserController {

    static login(req,res,next) {
        console.log("Masuk login")
        let { email, password } = req.body;
        let token = generateToken({ email });
        res.cookie('savecookie', token);
        //Csurf cookie---------
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.status(200).json({message: "Welcome", user: { email, password }})
    };

    static logout(req,res,next) {
        res.clearCookie();
        res.status(200).json({message: "You have been logout"})
    };

    static checkAuth(req,res,next) {
        let { email } = req.decoded;
        res.status(200).json({message: "You already login", user: email})
    };

};

module.exports = UserController;