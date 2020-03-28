var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    items: [
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
    ]
  });
});

module.exports = router;
