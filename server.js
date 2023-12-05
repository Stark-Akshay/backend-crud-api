const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello');
    console.log("listening to 3000")
})

app.listen(3000, () => {
    console.log('Running on 3000')
})