var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  name: String,
  oquant: Number,
  nquant: Number,
  exp_date: String
});
var Item = mongoose.model('Item', itemSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  Item.find(function (err, items) {
    if (err) return console.error(err);
    res.json({
      items: items
    });
  })
});

router.post('/', function(req, res, next) {
  var item = new Item({
    name: req.body.name,
    oquant: req.body.oquant,
    nquant: req.body.nquant,
    exp_date: req.body.exp_date
  });
  item.save(function (err, fluffy) {
    if (err) return console.error(err);
  });
  res.json(item);
});

router.put('/', function(req, res, next) {
  Item.findOne({ 'name': req.body.name }, function(err, item) {
    if (err) return handleError(err);
    item.oquant = req.body.oquant,
    item.nquant = req.body.nquant,
    item.exp_date = req.body.exp_date

    item.save(function (err, fluffy) {
      if (err) return console.error(err);
      res.json(item);
    });
  });
});

module.exports = router;
