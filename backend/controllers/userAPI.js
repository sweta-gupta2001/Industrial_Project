// IMPORT EXPRESS SERVER
const express = require('express');

// USE ROUTER FOR EXPRESS SERVER
const router =express.Router();

// INSERT RECORD/Document
router.post('/userreg', (req, res) => {
    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});
// INSERT RECORD/Document
router.post('/userlogin', (req, res) => {
    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});


// UPDATE RECORD/Document
router.put('/profileupdate', (req, res) => {
    res.send('<h2>INSIDE PUT METHOD..THIS IS UPDATE API..</h2>');
});

//SHOULD BE EXPORTED
module.exports = router;