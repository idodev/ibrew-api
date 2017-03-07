var express = require('express');
var router = express.Router();
var cmd = require('node-cmd');

/* GET users listing. */
router.get('/start', function(req, res, next) {
  cmd.get(
    'ibrew heat 100 10 192.168.0.34',
    function(data) {
      res.send(data);
    }
  );
});

router.get('/stop', function(req, res, next) {
  cmd.get(
    'ibrew stop 192.168.0.34',
    function(data) {
      res.send(data);
    }
  );
});

router.get('/status', function(req, res, next) {
  cmd.get(
    'ibrew status 192.168.0.34',
    function(data) {
      res.send(data);
    }
  );
});

module.exports = router;
