// "class"
// represents a redacted file
// filename is the file to read
// word is the word to be redacted (replaced with the word REDACTED)
// printFile <-- the file should be printed, but with redacted words REDACTED
const fs = require('fs'); 
    
function RedactedFile(fileName, word) {
  this.fileName = fileName;
  this.word = word;
}

RedactedFile.prototype.printFile = function() {
 // this won't work as expected (???)
 fs.readFile(this.fileName, this.handleRead); 

 // fixing this using arrow functions...
 // fs.readFile(this.fileName, (err, data) => { this.handleRead(err, data); }); 
 
 // fixing this using bind... 
 // fs.readFile(this.fileName, this.handleRead.bind(this)); 
};

RedactedFile.prototype.handleRead = function(err, data) {
  // convert to string
  let s = data + '';

  // let's try to replace every occurrence of this.word!
  const replacementPattern = new RegExp(this.word, "g");
  s = s.replace(replacementPattern, 'SECRET');

  // print out the result
  console.log(s);
};

const redacted = new RedactedFile('data.txt', 'pizza');
redacted.printFile();
