require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;

app.use(cors({credentials: true, origin: ['http://localhost:3000', 'http://localhost:3001']}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Route
app.use(require('./routes'))


app.listen(PORT, () => console.log(`Server started on ${PORT}`))
