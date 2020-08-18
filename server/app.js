require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
//Csurf ----------------->
const csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })
const PORT = process.env.PORT;

app.use(cors({credentials: true, origin: ['http://localhost:3000', 'http://localhost:3001']}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Route

app.get('/csurf', csrfProtection, (req,res,next) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.status(200).json({message: "Success"})
})

app.get('/check-csurf', csrfProtection, (req,res,next) => {
    res.status(200).json({message: "Success"})
})

app.use(require('./routes'))


app.listen(PORT, () => console.log(`Server started on ${PORT}`))
