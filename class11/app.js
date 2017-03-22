const express = require('express');
const app = express();
const uuid = require('node-uuid');

const sessions = {1: {name: 'foo', favColor: 'bar'}};
function sessionMaker(req, res, next) {
    
    /*
    console.log('cookie headers', req.get('Cookie'));
    console.log('all headers', req.headers);
    next();
    */
    const cookies = {};
    req.get('Cookie').split(';').forEach((unparsed) => {
        const [name, value] = unparsed.split(':'); 
        cookies[name] = value;
    });

    if (cookies.hasOwnProperty('SESSION_ID')) {
        req.session = sessions[cookies['SESSION_ID']]; 
    } else {
        const sessionID = uuid.v4();
        res.append('Cookie', 'SESSION_ID=' + sessionID);
        sessions[sessionID] = {};
    }
    next();
}

app.use(sessionMaker);

app.get('/', (req, res) => {
    console.log(req.cookies);

    res.append('Set-Cookie', 'foo=bar');
    res.append('Set-Cookie', 'baz=qux');
    res.send(req.cookies);
    if(req.session) {
        req.session.foo = 'bar'; 
        console.log('got session', req.session);
    } else {
        console.log('NOPE', req.session);
    }
});
app.listen(3000);
