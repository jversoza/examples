const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// middleware
// a bunch functions that can get called before or after
// your route handlers
//
// express.static
// * examines the incoming request path
// * searches for that file on the file system
// * if it finds the file, it responds with that file
// * if it doesn't, it goes on to the next route handler

// use middleware
// pass in path of your static files
app.use(express.static('public'));

// 2 args:
// path that you want to respond to
// callback function 
//   also takes two arguments
//   req, res
// (essentially the same as the get method you implemented for
// App)
// callback is called when a request for this particular path
// is made by a client
// maybe delivering html via strings - not the best idea
// * separate content from code
// * readability
// * isolation of responsibilities <-- someone just writes markup
// another person writes backend code
//
//
//

// what's the shortcoming of static files
// * that dynamic data is not possible with just static files
// * (you can sort of do something on the client side to achieve
// * this)

// chooses hbs as our template engine
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    // renders a template
    // 1st arg is template name w/ out extension
    // 2nd arg is context object (the variables availabe to template)
    const context = {
        foo: 'bar',
        evil: "<script>alert('hello')</script>",
        numbers: [2, 3, 4, 5],
        cats: [{name: 'chairman meow', lives: 2}, {name: 'bill furry', lives: 9}],
        flag: false,
    };
    res.render('index', context);
    // res.send('<h1>yas tags!</h1><em>hello</em>');
});

app.get('/get-demo', (req, res) => {
    // req.query will be object that contains query string parameters
    console.log(req.method, req.path);
    const numbers = [1, 2, 3, 4, 5];
    const min = req.query.minNumber || numbers[0]; 
    // check if min exists, if it doesn't default to last value
    
    const filteredNumbers = numbers.filter(n => n >= min);
    res.render('getDemo', {numbers: filteredNumbers});
});


app.get('/get-form-demo', (req, res) => {
    res.render('getFormDemo');
});
app.get('/get-form-demo-action', (req, res) => {
    res.send(req.query.foo);
});
// POST form
// route to handle a GET (get the form)
// route to handle a POST (handling the post request from the form)

const foos = [];

app.get('/post-demo', (req, res) => {

  res.render('postDemo', {foos: foos});
});


app.post('/post-demo', (req, res) => {
  console.log('handling post', req.body);
  foos.push(req.body.foo);
  // res.render('postDemo', {foos: foos});
  res.redirect('post-demo');
});





app.listen(8080);
