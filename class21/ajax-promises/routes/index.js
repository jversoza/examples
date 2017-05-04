var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// /api/letters/:letter -> localhost:3000/api/letters/:next-letter
//
const messages = ['hi, how are you?', 'ok!'];

/**
 * CHAT (AJAX POST)
 */
router.post('/chat', (req, res) => {
    messages.push(req.body.message);
    res.redirect('/chat');
});

router.get('/chat', (req, res) => {
    messages.push(req.body.message);
    res.render('chat', {messages: messages});
});

/**
 * API END POINTS FOR PROMISES 
 */
const letters = {
    tango: 'http://localhost:3000/api/letters/uniform',
    uniform: 'http://localhost:3000/api/letters/victor',
    victor: 'Done!'
};

router.get('/api/letters/:letter', (req, res) => {
  setTimeout(function() {
    res.json({url: letters[req.params.letter]});
  }, 1000 + Math.random() * 1000);
});




module.exports = router;
