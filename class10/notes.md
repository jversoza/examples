Class 10 - GET, POST, forms, templating, storing data 
=====

Most comments are in comments in `scratch.js`
-----

* run scratch.js: nodemon scratch.js
* try various urls in browser: localhost:8080/get-demo


Getting data from the user
-----

* data can be sent by GET query string parameters in a url
* when the client makes a GET request, it's possible to send data along with the request in the url
by using query string parameters:
    * denoted by ?name=value&otherName=otherValue
* whenever you type something in the url bar your browser automatically issues a GET request

Forms
-----

Instead of url hacking, you an create a form that allows a user to send query string parameters by filling out user interface elements

```
<form method="GET" action="">
</form>
```
* method = GET, POST, etc. <-- these are the only two that really work
* action = where you want to go, by default, this is the current path

To get your browser to issue an http request:

1. type something url bar (always GET)
2. submit a form (depends on the method attribute)
    * GET
    * POST

Templating
-----

by default using {{ }}'s ... will escape special characters in html with the appropriate html entity

* this prevents tag injection
* prevents javascript injection attacks

layout.hbs ... usually contains triple curlies so that < and > are not escaped (assumes that your template has tags that you interpreted as tags)

GET vs POST
-----

* GET - specifically for retrieving data only
    * data shows up in query string
* POST - for creating data (modifying data)
    * data is in the request body
    * to get at POST data.... use middleware called body-parser
    * body-parser puts names and values in req.body prop

Example POST request
-----

```
POST /login HTTP/1.1
Content-Type: www-form-urlencoded

username=jjv222&password=somepassword
```

