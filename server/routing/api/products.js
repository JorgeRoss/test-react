var express = require('express')
var app = express.Router()
var fetch = require('node-fetch');


app.get('/listProducts', (req, res) => {

    fetch('http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products/ ', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => result.json())
        .then(data => {
            data.items.map((value, index) => {
                return value.enabled = true
            })
            res.status(200).send(data)
        })
        .catch(err => {
            console.log(err)
            res.status(404)
        })

})



app.get('/productDetail/:id', (req, res) => {

    fetch('http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products/' + req.params.id, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => result.json())
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            console.log(err)
            res.status(404)
        })

})

module.exports = app;
