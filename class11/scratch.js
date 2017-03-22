/*
express ... request and response cycle

you get the request
express parses it and dumps it into a request object

you responsibility is to define what the response of your application is

and you do this through the response object

all of these methods close a request/response cycle
====
res.send <---- whatever response you have, send it, and close connect
res.sendFile
res.end
res.render


once you call one of these, connection is closed, and no more response can be set

write to client, but don't end req/res cycle
====
res.write
res.writeHead

app.get -->
creating a route handler
can be considered middleware

express is just a bunch of functions executed serially on a request and respone object

if you don't have any middleware and just a route handler(s)
app.get --> calling that one callback function for a req/res
* that one fuction (callback) is called
* must send back response
*
once middleware is brought in...

call stack...

1. middleware1
2. middleware2 <-- res.send (#3 won't be able to send back response)
3. route handler

that's why middleware has a 3rd param, next <-- next calls the next middleware or route handler

*/
const express = require('express');
const app = express();

/*
function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

app.use('/a', (req, res, next) => { 
    console.log('hello');
    res.send('hello');
});

app.use(logger);
*/



app.set('view engine', 'hbs');

const names = ['paw newman', 'bill furry'];

/*
/cats

* name1
* name2
cat name: ______ [ADD]
*/

/*
POST /cats HTTP/1.1
Host: localhost

catName=chairman+meow
*/

/*
body-parser is MIDDLEWARE.... will parse a request body
and dump that data into a property on the req oboject called
req.body (much like req.query and GET requests)
*/

// express static is middleware... and it serves files from a directory
/*
1. look at the path
2. try to open the file
3. if you get an error, call next
4. if the file is opened, then read it
5. and send back the response with the file contents as the data 
*/

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.set('Server', 'My amazing server YASSS');
    next();
});
app.get('/cats', (req, res) => {
   res.render('cats', {whatever: names}); 
});

app.post('/cats', (req, res) => {
   names.push(req.body.catName);
   // res.render('cats', {whatever: names}); 
   res.redirect('/cats');
});


app.get('/a', function(req, res) {
  res.send('a');
});

app.get('/b', function(req, res) {
  res.send('b');
});

app.get('/c', function(req, res) {
  res.send('c');
});

app.listen(3000);





























