const mongoose = require('mongoose');

// schema tells mongoose the types that are allowed in a collection
const Cat = new mongoose.Schema({
    lives: Number,
    name: String
});

// it makes mongoose aware of this schema... and binds it to a name (as a string)
mongoose.model("Cat", Cat);
// after this, we can get the Cat model/schema out and use it to construct documents
// in a sense, this is a weird way of creating a constructor

// connection string
// user, password and location of the database server
// the actual database name
// db name does not have to exist
mongoose.connect('mongodb://localhost/class15catdb');

/*
const CatConstructor = mongoose.model("Cat");
// we can use constructor to create new Cat documents that adhere to the schema / model or model we created


// creates a new Cat document
const c = new CatConstructor({name:"Joe Fursoza", lives:9});

// persists to database (actually saves it)
// callbacks usually have 3 args:
// 1. err object (if there's an error, this will not be null)
// 2. the result of the operation... if it's save, then it's the document that was saved, if it's a search/find....then it's the documents that are found
// 3. count (usually present) .... number of documents affected
c.save((err, cat, count) => {
    // executed after save occurs
    console.log('err', err, '|cat ', cat, '|count', count);
    if(!err) {
        console.log('save');
    } else {
        console.log(err);
    }

});
*/
