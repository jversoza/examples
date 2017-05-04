var express = require('express');
var router = express.Router();

/* GET home page. */
const students = ['abc123', 'xyz789'];

router.get('/students', function(req, res) {
    res.json(students);
});

router.post('/students', function(req, res) {
    console.log(req.body);
    res.json({'body': req.body});
});

module.exports = router;
