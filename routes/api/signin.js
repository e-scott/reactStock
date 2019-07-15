const router = require("express").Router();
const booksController = require("../../controllers/stocksController");

const express = require('express');
// const expressRouter = express.Router();
const passport = require('passport');
const { isNotLoggedIn } = require('../../config/helper_auth');

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

router
  // .route("/")
  // .post(isNotLoggedIn);
  // .post(booksController.signup);
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);
  .get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
})
  .post("/", isNotLoggedIn, passport.authenticate('local.signin', {
    successRedirect: '/index',
    failureRedirect: '/signin',
    failureFlash: true
}))
// .post(passport.authenticate('local.signup', {
//   successRedirect: "/success",
//   failureRedirect: "/failue"
//   // failureFlash: true
// }))

module.exports = router;
