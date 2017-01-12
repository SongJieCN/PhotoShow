var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/scrumb', function(req, res, next) {
    res.render('scrumb', { title: 'Express' });
});

router.get('/timeline', function(req, res, next) {
    res.render('scrumb', { title: 'Express' });
});

module.exports = router;
