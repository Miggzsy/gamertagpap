var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// establish MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017');
var conn = mongoose.connection;
var path = require('path');

// require GridFS
var Grid = require('gridfs-stream');
//require filesystem module
var fs = require('fs');

// where to find the phoot in the filesystem that we will store in the DB
var photoPath = path.join(__dirname, '../uploads/');

Grid.mongo = mongoose.mongo;

conn.once('open', function() {
    console.log('-Connection open -');
    var gfs = grid(conn.db);



    //var when connection is open, create write stream with
    // the name to store the file as in the db
    var writestream = gfs.createWriteStream({
        // store photo as photo1.png
        filename: 'photo1.png'
    })
})