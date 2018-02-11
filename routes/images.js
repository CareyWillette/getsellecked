var express = require('express');
var router = express.Router();
var images = require('../public/img/tsimages');


router.get('/getselleck', function(req, res) {

  var selfie = images.split('~~><~~');
  var min = 0;
  var max = selfie.length;
  var rand = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(selfie);
  console.log(rand);
  var s = selfie[rand];
  res.send(s);
});

/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('index.html', {root: __dirname});
});

module.exports = router;
