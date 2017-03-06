// a function that will be called at some later time



const obj = {
    prefix: 'hello',
    greet: function(names) {
        // what is this?
        // at this point this is obj
        // which is good
        names.forEach(this.sayGreeting.bind({foo:'bar', prefix:'arbitrary see?'}));
            // this is a regular function invocation
    },
    sayGreeting: function(n) {
        console.log(this.prefix, n); 
    }
};

obj.greet(['joe', 'joanna', 'deena']);
// within greet, this is going to be obj
/*
const prefix = 'hello';
const names = ['joe', 'joanna', 'deena'];
function sayHello(n) {
    console.log(prefix, n); 
}
names.forEach(sayHello);
*/

        

a function that takes a function as an argument (original) and returns a new function by wrapping the original function in a function and returning that


function decorator(f) {
    function g(...args) {
        // any logic you want here before
        // or after original function, f is
        // executed
        // consequently potentially modifying arguments and/or return values
        // f(); 
        return f(...args);
    }
    return  g;
}



/*
x a named a function
x an anonymous function
an anonymous arrow function
a method
*/
