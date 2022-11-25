const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost:27017/db_Demo')
var db = mongoose.connection
app.post('/sign_up', (req, res) => {
    var email = req.body.email
    var pass = req.body.password
    var data = {
        'email': email,
        'password': pass
    }
    db.collection('col1').insertOne(data, (err, collection) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Data has been inserted')
        }
        return res.redirect('succesfull.html')
    })
})
app.get('/', (req, res) => {
    res.redirect('index.html')
    
})
app.listen(3000, () => console.log("http://localhost:3000"))
