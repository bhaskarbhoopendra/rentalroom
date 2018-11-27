const express = require('express');
const router = express.Router();
const Owner = require('../models/owner');

// @route GET /eventForm
// @desc Shows the landing page
// @access Public
router.get('/form', (req, res) => {
  res.render('owner/new');
})

// @route POST /events
// @desc Shows the landing page
// @access Public
router.post('/', (req, res) => {
  Owner.create(req.body.owner)
    .then((newRental) => {
      res.redirect('/rental');
    })
    .catch(err => console.log(err));
})
module.exports = router;