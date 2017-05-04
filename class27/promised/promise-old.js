const fs = require('fs');

// there's readFileSync, of course... but just to illustrate
// how you might implement this
fs.readFile('data1.txt', {encoding: 'utf-8'}, function(err, data) {
    if(err) {
        console.log(err); 
    } else {
        console.log('one - read ' + data.length + ' characters'); 
    }
});
fs.readFile('data2.txt', {encoding: 'utf-8'}, function(err, data) {
    if(err) {
        console.log(err); 
    } else {
        console.log(data); 
    }
});
fs.readFile('data3.txt', {encoding: 'utf-8'}, function(err, data) {
    if(err) {
        console.log(err); 
    } else {
        console.log(data); 
    }
});

/*
function readFile(fn) {
    return new Promise(function(fulfill, reject) {
        fs.readFile(fn, {encoding: 'utf-8'}, function(err, data) {
            if(err) {
                reject(err); 
            } else {
                fulfill(data.trim()); 
            }
        });
    });
} 

readFile('data1.txt')
    .then(function(val) { console.log(val.length + ' characters read'); })
    .then(function() { return readFile('data2.txt'); })
    .then(console.log)
    .then(function() { return readFile('data3.txt'); })
    .then(console.log);
    
*/

