const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const cors = require('cors')

const apiRoute = require('./routes/apiRoutes/Api')
const redirectRoute = require('./routes/Redirect')


//DB
mongoose.connect(
    process.env.DB_URI,
    { 
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (error) =>{
        if (error) console.error(error);
        
        const dbStatus = mongoose.connection.readyState;
        switch(dbStatus){
            case 0:
                console.log("Database disconected!");
                break;
            case 1:
                console.log("Database Connected!");
                break;
            default:
                console.log("Connecting to database...");
                break;
        };
    }
);


//express app
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(bodyParser.json())

//routes
app.use('/', redirectRoute)
app.use('/api/v1', apiRoute)


app.listen(PORT, () => {console.log('Server started...')});