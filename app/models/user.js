// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    username: String,
    password: String,
    email: String,
    bio: {
        type: String,
        default: "Change me!"
    },
    picture: {
        type: String,
    },

})
// methods ======================

