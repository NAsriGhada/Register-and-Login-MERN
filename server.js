const express = require("express");
const cookieParser = require("cookie-parser")
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors');


const routes = require('./routes/index')

const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// connect to db
mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGODB_URI, () => {
//     console.log('connected to db')
// })
mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true, //make this true, not working anymore
        autoIndex: true, //make this also true
    })
.then(() => ('connected to db'))
.catch(err => console.log(err))
app.use('/api', routes)



const port = process.env.PORT 
app.listen(port, () => console.log(`the server is running on port ${port}` ));