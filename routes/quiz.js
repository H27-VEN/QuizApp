const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/quizdb', ['sports','movies', 'history', 'geography']);


router.get('/sports', function(req, res){
    console.log("-- in /sports --");
    db.sports.find({}, function(err, docs) {
        console.log(docs);
        res.send(JSON.stringify(docs));
    }); 
});

router.get('/movies', function(req, res) {
    console.log("-- in /movies --");
    db.movies.find({}, function (err, docs) {
        console.log(docs);
        res.send(JSON.stringify(docs));
    });
});

router.get('/history', function(req, res){
    console.log("-- in /history --");
    db.history.find({}, function (err, docs) {
        console.log(docs);
        res.send(JSON.stringify(docs));
    });
});

router.get('/geography', function(req, res) {
    console.log("-- in /history --");
    db.geography.find({}, function (err, docs) {
        console.log(docs);
        res.send(JSON.stringify(docs));
    });
});


module.exports = router;