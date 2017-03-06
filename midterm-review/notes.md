review
=====

topics
=====
* everything covered up to last week's class (middleware, cookies)
* it won't have anything databases / mongodb

materials
======
1. slides
2. homework
3. quizzes

additional info
=====
1. readings

out-of-class review
======
today
led by braden
topics voted on in survey (prototypes, express templating)
wwh 202 
4pm - 5pm

coding questions
=====
no code from scratch questions for for cookies and middleware
(but maybe fill in the blank, short answer, etc.)


last note
=====
* homework #4 on friday
* quizzes 2 - 5 should be available for practice (these do not

topics
=====
* oo x middleware - motivation for using
* oo - 1 x callback functions - should you use bind / arrow functions / create separate function / use method
* oo - 1 x create a prototype chain with and without classes
* 16 x function decorators and higher order functions
* 14 x GET and POST - why use one over the other (forms)
* 8 x scopes and closures
* 6 x request and response objects

middleware
=====
middleware is just one of a stack of functions that process request and response objects


it allows you to operate on request and response on all requests or subset of requests

any functionality which you find yourself duplicating across all requests should be middleware

some applications:
(things that express doesn't do for you out-of-the-box)

* validate in the request
* authentication ... on every request, we might check session if user is authenticated
* check the path coming in... does the file exist at that path in local file system, and if it does deliver the file <--- express.static
* it will look at request body and parse it depending on configured content type (if it's urlencoded, it will will parse out ?name=val&name2=val2)... and dump results into req.body
* a logger - logs out method and path (and potentially query string and body)
* a response header injection - we added Server: my awesome server on every response

cookies
=====
in order to coerce the browser to create a cookie
use Set-Cookie header
Set-Cookie: foo=bar

On every sub req, browser will send Cookie: header, which will be all cookies set, separated by semicolon

The server can send back Set-Cookie header an HTTP-Response ... to instruct browser to create cookie

When a browser / client has cookies for the domain and path it is requesting, it will send the cookies via the Cookie header in an HTTP Request

this
=====
what does this refer to

* invoke as regular function - global object
* invoke as a method - object that method was called on
* arrow function (regardless of how it's invoked) - this will be whatever this is when the arrow function was created
* call and apply - this is explicitly set by call to call or apply
    * call will take parameters positionally for function being invoked
    * apply will take array for parameters for function being invoked
    * parseInt.call(null, '101', 2) <-- will invoke parseInt
    * parseInt.apply(null, ['101', 2])
    * parseInt.bind <-- we get a new function returned

prototypes
======






































