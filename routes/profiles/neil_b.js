var express = require('express');
var router = express.Router();


var name    = 'Neil Boyd';
var twitter = '@Get Back To Me';
var github  = 'https://www.github.com/conesco3/';
var blurb   = "Hi, my name is Neil (other Neil) and I am a student at West College Scotland, Paisley studying Computing: Software Development";


/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('profiles/neil_b.jade', {
=======
  res.render('profiles/neil_b.pug', {
>>>>>>> 614783ed12ae18ccb6981ae289c5e5b78e7ddd03
    name    : name,
    twitter : twitter,
    blurb   : blurb,
    github  : github
  });
});

module.exports = router;
