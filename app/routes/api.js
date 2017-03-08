var express = require('express');
var router = express.Router();
var cmd = require('node-cmd');

/* GET users listing. */
router.get('/start', function(req, res, next) {
  cmd.get(
    'ibrew heat 100 10 ' + process.env.IKETTLE_IP,
    function(data) {
      res.send(data);
    }
  );
});

router.get('/stop', function(req, res, next) {
  cmd.get(
    'ibrew stop ' + process.env.IKETTLE_IP,
    function(data) {
      res.send(data);
    }
  );
});

router.get('/status', function(req, res, next) {
  cmd.get(
    'ibrew status ' + process.env.IKETTLE_IP,
    function(data) {
      res.send(data);
    }
  );
});

module.exports = router;
