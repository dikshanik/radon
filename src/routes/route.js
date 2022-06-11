const express = require('express');
// const externalModule1 = require('./logger')
const externalModule = require('../logger/logger')
const helperModule = require("../util/helper.js")
const formatterModule = require("../validator/formatter.js")
const router = express.Router();

router.get('/test-me', function (req, res) {

    externalModule.log()
    helperModule.dd()
    helperModule.mm()
    helperModule.batchInfo()
    formatterModule.lower()
    formatterModule.upper()
    externalModule.chunk()
    externalModule.tail()
    externalModule.union()

    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    res.send('My first ever api!')
});

// router.get('/test-me1', function (req, res) {
//     res.send('My second ever api!')
// });

// router.get('/test-me2', function (req, res) {
//     res.send('My third api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My 4th api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')
// });

module.exports = router;
// adding this comment for no reason