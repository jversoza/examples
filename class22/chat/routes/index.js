const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = mongoose.model('Message');

/* GET home page. */
router.get('/chat', (req, res) => {
  res.render('chat');
});

router.get('/api/messages', (req, res) => {
    Message.find((err, messages) => {
        res.json(messages); 
    });
});

router.post('/api/message', (req, res) => {
    (new Message({
        message:req.body.message,
        from:req.body.from, 
    })).save((err, message) => {
        if(err) {
            console.log(err); 
            res.json(err); 
        } else {
            res.json(message); 
        }
    });
});

module.exports = router;
