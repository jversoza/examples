getting data from the user

GET query string parameters in a url

when the client makes a GET request, it's possible to send
data along with the request in the url
by using query string parameters

denoted by ?name=value&otherName=otherValue

whenever you type something in the url bar your browser automatically issues a GET request

instead of url hacking, you an create a form that allows a user to send query string parameters by filling out user interface elements

<form method="GET" action="">
method = GET, POST, etc. <-- these are the only two that really work
action = where you want to go, by default, this is the current path

</form>

to get your browser to issue an http request:
1. type something url bar (always GET)
2. submit a form (depends on the method attribute)







by default

using {{ }}'s ... will escape special characters in html
with the appropriate html entity

this prevents tag injection
prevents javascript injection attacks

layout.hbs ... usually contains triple curlies so that < and > are not escaped (assumes that your template has tags that you interpreted as tags)


web framework - express
pretty to homework 3

* routing
* static files
* templating

GET - specifically for retrieving data only
* data shows up in query string

POST - for creating data (modifying data)
* data is in the request body

login == creating an authenticated session (it's not reading something)

to get at POST data.... use middleware called body-parser

post request
=====
POST /login HTTP/1.1
Content-Type: www-form-urlencoded

username=jjv222&password=somepassword

body-parser puts names and values in req.body prop








