var express = require('express');
var router = express.Router();

<<<<<<< HEAD

router.get('/', function(req, res, next) {
  var user = [{user:"fake", password:"fake"}]
  res.status(200).json(user)
=======
router.get('/', function(req, res, next) {
  res.json([{user: 'fake', password: 'fake'}]);
>>>>>>> part-2
});

module.exports = router;