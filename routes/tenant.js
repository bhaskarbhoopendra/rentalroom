const express = require('express');
const router = express.Router();
const Tenant = require('../models/owner');

// @route GET /eventForm
// @desc Shows the landing page
// @access Public
router.get('/form', (req, res) => {
  res.render('tenant/new');
})

// @route POST /events
// @desc Shows the landing page
// @access Public
router.post('/', (req, res) => {
  Tenant.create(req.body.tenant)
    .then(() => {
      res.redirect('/rental');
    })
    .catch(err => console.log(err));
})
module.exports = router;