var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Slide Home' });
});

router.get('/new', function(req, res, next){
    res.render('slide');
});

router.post('/new', function(req, res, next){
    res.send('Post new slide here');
});

module.exports = router;