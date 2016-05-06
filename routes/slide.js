var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('slide.db');
/* GET home page. */
router.get('/:id', function(req, res, next) {

    //Slide object that contains images and text with location
    slide_body = {
        id: req.params.id,
        title: '',
        images: [],
        texts: []
    };

    //Get the damn slide
 /*   db.serialize(function() {
        db.get("SELECT * FROM slides WHERE ROWID =" + slide_body.id, function(err, row) {
            console.log(row);
            slide_body.title = row.title;
        });
        db.each("SELECT * FROM text WHERE slide_id=" + slide_body.id, function(err, row) {
            console.log(row);
            slide_body.texts.push(row);
        });
        db.each("SELECT * FROM image WHERE slide_id=" + slide_body.id, function(err, row) {
            console.log(row);
            slide_body.images.push(row);
        });
    });*/

    res.render('slide', { slide_text : slide_body.texts, slide_image : slide_body.images });
});

//Get a clean new page to create a slide
router.get('/new', function(req, res, next){
    res.render('slide');
});

//Store a new slide
router.post('/new', function(req, res, next){

    var new_id = 0;
    //console.log(req.body.data.slide_body);
    var slide = req.body.data.slide_body;
    db.run('INSERT INTO slides VALUES (?)', slide.title, function(err, something){
        new_id = this.lastID;

        console.log(slide.texts[0].text);

        slide.texts.forEach(function(text){
            db.run('INSERT INTO texts VALUES (?,?,?,?)', [new_id, text.text, text.x_pos, text.y_pos], function(err, something){console.log(err)});
        });
        slide.images.forEach(function(image){
            db.run('INSERT INTO images VALUES (?,?,?,?)', [image.image, image.x_pos, image.y_pos, new_id],function(err, something){console.log(err)});
        });

        if(err != null){

        }else if (err == null){
            console.log(err);
        }
        res.send('Success');
    });
});

//Update a slide
router.post('/edit', function(req, res, next){

    res.send('Post new slide here');
});

module.exports = router;