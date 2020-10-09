const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

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


const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Welcome to the home route.");
})



app.listen(PORT, () => {console.log('Server started...')});