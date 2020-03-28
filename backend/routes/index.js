var express = require('express');
var router = express.Router();

var items = [
  {
      name: 'Chicken Breast Chunks',
      oquant: 0,
      nquant: 0,
      exp_date: 'Mar 31st 2020'
  },
  {
      name: 'Parmigiano Reggiano',
      oquant: 0,
      nquant: 0,
      exp_date: 'Mar 31st 2020'
  },
  {
      name: 'Waitrose Linguine',
      oquant: 0,
      nquant: 0,
      exp_date: 'Mar 31st 2020'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    items: items
  });
});

router.post('/', function(req, res, next) {
  items.push(req.body);
  res.json(req.body);
});

module.exports = router;
