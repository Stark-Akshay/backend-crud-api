require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
var cors = require('cors');

app.use(cors())
app.use(express.json())
app.use('/api/products',productRoute);


app.get('/', (req, res) => {


    // throw new Error(`fake error`);
    res.send('Hello');
    console.log("listening to 3000")
})


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})



app.use(errorMiddleware); // should be here ! because it needs to access the code

mongoose.connect(MONGO_URL)
.then(() => {
    console.log('connected to mongodb')
})
.catch((error) => {
    console.log(error)
})
