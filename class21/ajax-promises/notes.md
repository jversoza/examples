 a promise is an object
 it represents an async task
 it can have 3 states

 1. pending: the task has not completed yet
 2. fulfilled (resolved or success): the task completed successfully
 3. rejected (failure): the task did not complete successfully

to create a promise, use a constructor

const p = new Promise(f) <--- a single arg

single arg to constructor is a function called executor

the executor itself has 2 arguments:

1. the function to call if async task completes successfully
2. the function to call if async task does not complete successfully


const p = new Promise(function(fulfill, reject) {
    // do async stuff here
    if(successful) {
        fulfill(val);
    } else {
        reject(val); 
    }
});


promises have some methods

1. then - specifies what to do when there's success or failure (sets
the fulfill and reject functions)
    * return a value
    * return will always be a promise... it will return the return value
      of the fulfill function
    * if that value isn't a promise, then it'll wrap it in a promise
















feedback for m2 late tonight or tomorrow

8th homework

* drop lowest scoring hw


=====

1. create the object
2. configure object  --> GET or POST, what url?
3. determine what to do on success vs on failure
4. send request
