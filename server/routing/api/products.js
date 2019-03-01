var express = require('express')
var app = express.Router()
var fetch = require('node-fetch');
var Product = require('../../models/product')

var producto = Product;

app.get('/', (req, res) => {

    fetch('http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products/ ', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => result.json())
        .then(async  (data) => {
             await Promise.all(data.items.map(async  (value, index) => {
                
               await producto.findOne({ id: value.id }, (err, obj) => {
                    if (obj) {
                        console.log("id item existente :" + obj.id)                                          
                        value.enabled = obj.enabled;
                    } else {
                        var itemProducto = new Product();

                        itemProducto.id = value.id;
                        itemProducto.enabled = true;

                        itemProducto.save((err, prodStore) => {
                            console.log(prodStore);
                        });
                    }
                })

                
                return value;

            }))
            res.status(200).send(data)
        })
        .catch(err => {
            console.log(err)
            res.status(404)
        })

})



app.get('/:id', (req, res) => {

    fetch('http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products/' + req.params.id, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => result.json())
        .then(data => {

            producto.findOne({ id: req.params.id }, (err, obj) => {
                if (obj.enabled) {
                    res.status(200).send(data)
                } else {
                    res.status(404).send({ message: 'Producto Inhabilitado' })
                }
            })

        })
        .catch(err => {
            console.log(err)
            res.status(404)
        })

})


app.patch('/:id', (req, res) => {
    var productoObj = req.body;

    producto.findOneAndUpdate({ id: req.params.id }, { $set: productoObj },
        { new: true }, (err, doc) => {
            if (err) {
                res.status(404)
            }
            else {
                res.status(200).send({ message: 'Uddate estado Enabled' })
            }
        });

});

module.exports = app;
