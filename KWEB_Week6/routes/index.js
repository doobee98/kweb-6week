var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kweb-Week6-2doo' });
});

// 임시
router.get('/board/del', function(req, res, next) {
    res.render('board_del', {
        username : '2doo'
    });
});

router.get('/board/delete', function(req, res, next) {
    res.json({
        postId: req.query.postId,
        status : 'success'
    });
//    res.redirect('/');
});

router.get('/board/write', function(req, res, next) {
    res.render('board_write', {
        username : '2doo'
    });
});

router.post('/board/write', function(req, res, next) {
    res.render('board_list', {
        username : '2doo',
        post     : []
    });
});

router.get('/board/list', function(req, res, next) {
    var postId = parseInt(Math.random() * 1000);
    res.render('board_list', {
        username : '2doo',
        post     : []
    });
});

router.get('/home', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;
