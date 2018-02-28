// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var fileSchema = new Schema({
  fileName: { type: String, required: true},
  originalName: { type: String, required: true },
  path: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

// we need to create a model using it
var File = mongoose.model('File_1', fileSchema);

// make this available to our users in our Node applications
module.exports = File;