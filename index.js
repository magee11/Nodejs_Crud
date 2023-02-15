const express = require('express')
const mongoose = require('mongoose');
const route = require('./api/apis')
const app = express();

app.use(express.json())
app.use('/api',route)
mongoose.set("strictQuery", false)
mongoose.
connect('mongodb://localhost:27017/test')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((err) => {
    console.log(err)
})
