const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

require('./db');

const mongoose = require('mongoose');
const Cat = mongoose.model("Cat");


app.get('/', (req, res) => {
  console.log('in app.get /');
  Cat.find({}, (err, cats) => {

    console.log(err);
    // render goes in callback
    // because it has to wait for find to finish
    res.render('index', {cats: cats});
  });
});

app.post('/', (req, res) => {
  const c = new Cat({
    name: req.body.name, 
    lives: req.body.lives, 
  });
  c.save((err) => {
    if(err) {
        console.log(err); 
    }
    res.redirect('/');
  });
});


app.listen(3000);







