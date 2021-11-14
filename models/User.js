const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

// create a mongoose class
mongoose.model('users', userSchema);
