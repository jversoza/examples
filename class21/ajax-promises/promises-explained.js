const p1 = new Promise(function(fulfill, reject) {
    fulfill(1);

});

const p2 = p1.then(function(val) {
    console.log(val);
    return new Promise(function(fulfill, reject) {
        fulfill(val + 1); 
    });
});

const p2 = p1.then(function(val) {
    console.log(val);
    return val + 1;
});
// p2 is another promise

p2.then(console.log);




original
    .then()
    .then()
    .then()









