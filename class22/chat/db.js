const mongoose = require('mongoose');


const Message = new mongoose.Schema({
    message: {type: String},
    from: {type: String},
});

mongoose.model('Message', Message);
mongoose.connect('mongodb://localhost/class22-chat');
