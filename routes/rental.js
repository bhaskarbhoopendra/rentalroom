const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');


// @route GET /events
// @desc Shows the event page
// @access Public
router.get('/', (req, res) => {
  Rental.find({})
    .then((rental) => {
      res.render('rental/index', {
        rentals: rental
      })
    })
    .catch(err => console.log(err))
})

// @route GET /eventForm
// @desc Shows the landing page
// @access Public
router.get('/rentalform', (req, res) => {
  res.render('rental/new.ejs');
})

// @route POST /events
// @desc Shows the landing page
// @access Public
router.post('/', (req, res) => {
  Rental.create(req.body.rental)
    .then((newRental) => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
})

// @route GET /Edit the page
// @desc Shows the landing page
// @access Public
router.get("/:id/edit", (req, res) => {
  Rental.findById(req.params.id)
    .then(newRental => {
      res.render("rental/edit", {
        rental: newRental
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/:id', (req, res) => {
  Rental.findById(req.params.id)
    .then((foundRental) => {
      res.render('rental/show', {
        rental: foundRental
      })
    })
    .catch(err => console.log(err));
})

// @route PUT /Edit the page
// @desc Editing the ladning page
// @access Private
router.put("/:id", (req, res) => {
  Rental.findByIdAndUpdate(req.params.id, req.body.rental)
    .then(res.redirect('/rental'))
    .catch(err => console.log(err));
});

// @route DELETE /delete the event
// @desc deleting the event
// @access Public
router.delete("/events/:id", (req, res) => {
  Event.findByIdAndRemove(req.params.id)
    .then(res.redirect('/events'))
    .catch(err => console.log(err));
})


module.exports = router;