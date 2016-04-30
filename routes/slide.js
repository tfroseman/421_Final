var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('slide.db');
/* GET home page. */
router.get('/:id', function(req, res, next) {

    //Slide object that contains images and text with location
    body = {
        id: req.params.id,
        title: '',
        images: [],
        text: []
    };

    //Get the damn slide
    db.serialize(function() {
        db.get("SELECT * FROM slides WHERE id=" + body.id, function(err, row) {
            console.log(row);
            body.title = row.title;
        });
        db.each("SELECT * FROM text WHERE slide_id=" + body.id, function(err, row) {
            console.log(row);
            body.text.push(row);
        });
        db.each("SELECT * FROM image WHERE slide_id=" + body.id, function(err, row) {
            console.log(row);
            body.image.push(row);
        });
    });

    res.render('slide', { title: 'Slide Home' });
});


router.get('/new', function(req, res, next){
    res.render('slide');
});

router.post('/new', function(req, res, next){
    res.send('Post new slide here');
});

module.exports = router;