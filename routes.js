const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');


//Create a User using : POST "/api/auth/" and it doesn't require Auth
router.get('/',[
    body('email','Enter a valid Email').isEmail(), //Validates that the Email in the body is an Email only
    body('name','Enter a valid Name').isLength({min: 3}),
    body('password', 'Please enter valid password').isLength({min: 5}) //Name must be of minimum length 3
], (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user=>res.json(user)).catch(err=>{console.log(err)
    res.json({erorr: 'Please Enter a unique Value', message: err.message})});
})

module.exports = router