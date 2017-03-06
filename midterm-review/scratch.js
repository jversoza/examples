const express = require('express');
const app = express();
app.set('view engine', 'hbs');


/*
how would we add all cookies in the original http request
as name/value pairs within req.cookies
*/
app.use(function(req, res, next) {
    req.cookies = {};
    // cookie: clear=yes; more=true
    // console.log('headers:', req.headers);
    // console.log('cookie', req.headers['cookie']);
    // express has already parsed the headers for us
    // so we have access the header val directly
    // so no need to split by : first
    if (req.headers['cookie'] !== undefined) {
        const cookieParts = req.headers['cookie'].split(';');
        cookieParts.forEach((ele) => {
            const [name, value] = ele.split('='); 
            req.cookies[name] = value;
        });
    }
    next();
});

app.use(function(req, res, next) {
    console.log(req.method, req.path, req.cookies, req.headers);
    next();
});

app.get('/one', function(req, res) {
  res.append('Set-Cookie', 'clear=yes');
  res.append('Set-Cookie', 'more=true');
  res.render('one', {foo: 'bar', baz: [1, 2, 3], objs: [{x:'hello'}, {x: 'bye'}]});
});

app.get('/two', function(req, res) {
  res.render('two');
});

app.listen(8080);
