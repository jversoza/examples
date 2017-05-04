/*
what's the value of this in different cases

^^^ how many ways can a function be called

* as a regular function call (as a callback, without bind or arrow, etc. )
    * this - global object
* apply, call (bind)
    * set to first argument to apply and call
    * apply(null, [arg1, arg2])
    * console.log.apply(someObj, [arg1, arg2])
* method
    * this - the object that the method was called on



class Clicker() {
    constructor() {
        this.handleClick = this.handleClick.bind(this); 
    }

    function handleClick() {
        this.state <-- if i want to use "this"
    }
}





class A {
    callback() {
    
    }

    doStuff() {
        fs.readFile('stuff.txt', this.callback) <--- this.callback is just an
                                                        unbound function
    }


}


arrow functions <-- they take the this from the enclosing context



class Foo() {
    constructor() {
        this.greeting = 'hello';
    }

    foo() {
        // this exists here as the object that method was called on
        // but below, you have to bind
        const that = this;
        ['alice', 'bob', 'carol'].forEach((name) => {
            console.log(that.greeting, name); 
        }); 
    
    }



event handlers (callbacks to addEventListener)

class Foo {
    bar()
}

function Foo() {}

Foo.prototype.bar = function()
*/





