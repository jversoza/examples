const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// serving static files
// ======
// middleware: a function that can get called before or after
// your route handlers

// express.static is middleware that serves static files
// * examines the incoming request path
// * searches for that file on the file system
// * if it finds the file, it responds with that file
// * if it doesn't, it goes on to the next route handler

// use the express static middleware here
// pass in path of your static files 
// (slides show alternative way to do this by getting absolute path)
app.use(express.static('public'));

// templating (setup)
// =====
// what's the shortcoming of static files?
// * dynamic data is not possible with just static files
// * (you can sort of do something on the client side to achieve this, but we have not covered this)

// so... use a templating system to inject data into markup
// this line configures hbs our template engine
app.set('view engine', 'hbs');

// body parser middleware
// =====
// this is body parsing middleware (sometimes POST data comes through the body
// as url encoded data in name value pairs, use this middleware to parse that
// data and drop into req object as req.body!)
app.use(bodyParser.urlencoded({extended: false}));

// route handlers
// =====
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
app.get('/test', (req, res) => {
    res.send('<em>a test</em>');
});

// tempating (control structures)
// =====
app.get('/', (req, res) => {
    const context = {
        foo: 'bar',
        evil: "<script>alert('hello')</script>",
        numbers: [2, 3, 4, 5],
        cats: [{name: 'chairman meow', lives: 2}, {name: 'bill furry', lives: 9}],
        flag: false,
    };
    // res.render
    // =====
    // renders a template
    // * 1st arg is template name w/ out extension
    // * 2nd arg is context object (the variables availabe to template)
    res.render('index', context);
});

// GET form demo
// =====
// this will filter numbers based on the query string parameter
// (or the GET form in getDemo.hbs - the form has action="" which means
// that submitting will request this same path/url)
app.get('/get-demo', (req, res) => {
    // show the method and path requested
    console.log(req.method, req.path);

    // req.query will be object that contains query string parameters
    const numbers = [1, 2, 3, 4, 5];
    const min = req.query.minNumber || numbers[0]; 

    // check if min exists, if it doesn't default to last value
    const filteredNumbers = numbers.filter(n => n >= min);
    res.render('getDemo', {numbers: filteredNumbers});
});


// another GET form demo
// =====
// this renders a GET form; it also shows that you can use "action" to
// specify the url of the GET request caused by submitting the form
// (note that getFormDemo.hbs has a form with action="/get-form-demo-action")
app.get('/get-form-demo', (req, res) => {
    res.render('getFormDemo');
});

// this is the garget of the form rendered above; it logs out req.query
// and simply sends the content of req.query.foo back to the client
// (basically repeating whatever was submitted in the text input)
app.get('/get-form-demo-action', (req, res) => {
    console.log('GET query string parameters', req.query);
    res.send(req.query.foo);
});

// POST form
// =====
// the data in a POST request can be retrieved from req.body (you'll
// need to activate / use the body-parser middleware, which is above, in
// order to populate req.body)

// to issue a POST request from your browser, hit submit on a POST form (
// that is, a form with method="POST")

// you'll need a few routes for this:
// 1. route to handle a GET (get the form)
// 2. route to handle a POST (handling the post request from the form)

// in memory data store (goes away after server restart!)
const foos = [];

// renders the POST form (note method="POST" action="", which means send
// a POST to this url, /post-demo, when the form is submitted)
app.get('/post-demo', (req, res) => {
  res.render('postDemo', {foos: foos});
});


// this is the route that accepts a POST request
// note the pattern of redirecting immediately after a POST request
// this is to prevent re-POSTing when a page is refreshed
// to see the re-POST behavior, uncomment the render and comment out
// the redirect... refresh the page after submitting the form
app.post('/post-demo', (req, res) => {
  console.log('handling post', req.body);
  foos.push(req.body.foo);
  // res.render('postDemo', {foos: foos});
  res.redirect('post-demo');
});


app.listen(8080);
