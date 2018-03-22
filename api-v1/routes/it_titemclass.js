var express = require('express');
var bodyParser = require('body-parser');
var urlLib = require('url');
var router = express()
var jsonParser = bodyParser.json();
var urlLib = require('url')

var it_titemclassRepository = require('../repositories/it_titemclassRepository.js')
var auth = require('../repositories/authRepository.js')

// retrieve all pettition
// @param route - string
// @param jsonParser middleware
// @param callback function
// @returns response
router.get('/', jsonParser, function (req, res) {
    var url_parts = urlLib.parse(req.url, true);
    if (url_parts.query.name) {
        it_titemclassRepository.retrieveByName(url_parts.query.name, function (err, data) {
            if (err) {
                res.status(400)
            }
            res.send({ data: data, errors: err })
        })
    } else {
        it_titemclassRepository.getAll(function (err, data) {
            if (err) {
                res.status(400)
            }
            res.send({ data: data, errors: err })
        })
    }
})

// retrieve object 
// @param route - string
// @param jsonParser middleware
// @param callback function
// @returns response
router.get('/:id', jsonParser, function (req, res) {
    let id = req.params.id

    it_titemclassRepository.retrieve(id, function (err, data) {
        if (err) {
            res.status(400)
        }
        res.send({ data: data, errors: err })
    })
})

// delete object pettition
// @param route - string
// @param jsonParser middleware
// @param callback response 
// @returns a response
router.delete('/:id', jsonParser, function (req, res) {
    let id = req.params.id
    it_titemclassRepository.delete(id, function (err, data) {
        if (err) {
            res.status(400)
        }
        res.send({ data: data, errors: err })
    })
})

module.exports = router