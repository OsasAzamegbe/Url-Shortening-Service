const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const apiRoute = require('./routes/Api')


//DB
mongoose.connect(
    process.env.DB_URI,
    { 
        useNewUrlParser: true ,
        useUnifiedTopology: true
    },
    (error) =>{
        if (error) console.error(error);
        
        const dbStatus = mongoose.connection.readyState;
        switch(dbStatus){
            case 0:
                console.log("Database discconected!");
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


//routes
app.get('/', (req, res) => {
    res.send("Welcome to the home route.");
})

app.use('/api/v1', apiRoute)


app.listen(PORT, () => {console.log('Server started...')});