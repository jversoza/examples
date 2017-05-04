/*
What's a promise?
=====

An object that represents an async task. Its state can be:

1. pending
2. fulfilled (successfully completed)
3. rejected (completed, but failed)

argument that you pass in to promise constructor is a function (executor)
it will execute an async task
it has 2 parameters itself:
fulfill
reject
^^^ these two functions will be called in the body of the executor
when it completes successfully or on failure

fulfill and reject are set by using methods on the actual promise object

* then - takes 2 args, the definitions of fulfill and reject
* catch - only specifies reject
*/

/*
What's an example of where we would use promises?
=====

authentication homework


flow for registering a new user:

1. check if username exists <-- async
2. salt
3. hash <-- async
4. save <-- async
5. render successful page

Rather than using nested callbacks, promises might make this structure possible 
(assuming that findUser, hash and save are all functions that perform an async
task, but return a promise):

findUser(username)
    .then(salt) <-- salt is a function that should return salted pw
    .then(hash) <-- hash is a function that should take salted pw and hash it; it should return hash
    .then(saveUser) <-- save is a function that should take a hash and save it! 
*/


/*
// A promise that immediately fulfills:
//
const p1 = new Promise(function(fulfill, reject) {
    fulfill(1);
});

//then returns a value <-- always returns a promise
// that promise is based on the return value of fulfill
// then will return the promise returned by the fulfill function
const p2 = p1.then(function(val) {
    console.log(val);
    return new Promise(function(fulfill, reject) {
        fulfill(val + 1); 
    });
});

// equivalent to above code
const p2 = p1.then(function(val) {
    console.log(val);
    return val + 1;
});
p2.then(console.log, rejectFunction)
*/

/*
A contrived scenario for using promises:
=====

1. read all files sequentially
2. print out contents of: 
    * data1.txt
    * data2.txt
    * data3.txt
*/
const fs = require('fs');

function readFile(fn) {
    return new Promise(function(fulfill, reject) {
        fs.readFile(fn, {encoding: 'utf-8'}, function(err, data) {
            if(err) {
                reject(err);
            } else {
                fulfill(data);
            }
        });
    });
}

// make sure you functions are passed into then, not function calls!
readFile('data1.txt')
    .then(function(val) {
        console.log(val.length + ' characters read');
    })
    .then(function() { return readFile('data2.txt'); }) 
    .then(console.log, console.log.bind(null, 'rejected'));
// etc. ....







