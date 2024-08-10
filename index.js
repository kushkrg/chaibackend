require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/lav', (req, res) =>{
    res.send("This is twitter page.");
})

app.get('/html', (req, res) =>{
    res.send("<h2>This is Lavkush Kumar</h2>")
})

app.get('/youtube', (req, res) =>{
    res.send("This is our youtube page")
})
app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on ${port}`)
})