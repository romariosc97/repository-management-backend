var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(req.session, 'index')
  //return res.status(200).json({data:[]})
});

module.exports = router;
