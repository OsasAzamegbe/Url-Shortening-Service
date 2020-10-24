const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const apiRoute = require('./routes/apiRoutes/Api')
const UrlModel = require('./models/Url')


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
app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json())

//routes
app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/:key', async (req, res) => {
    const key = req.params.key
    
    try{
        const urlObj = await UrlModel.findOne({key: key})
        const longUrl = urlObj.url

        res.redirect(307, longUrl)

    } catch (error) {
        res.status(404).json({message: 'Resource Not Found'})
    }
})

app.use('/api/v1', apiRoute)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {console.log('Server started...')});