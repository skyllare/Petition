var express = require('express');
var router = express.Router();
const Users = require('../models/User');
const User = require('../models/User');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();
  res.render('index', {users})
});

router.post('/create', async function(req, res, next) {
  // console.log(req.body.name)
  // console.log(req.body.lastname)
  // console.log(req.body.email)

  try {
    await Users.create(
      {
        email: req.body.email,
        name: req.body.name,
        lastname: req.body.lastname
      }
    )
    res.redirect("/")
  }
  catch (error){
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
