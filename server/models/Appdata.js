// grab the things we need
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

// create a schema
var appdataSchema = new Schema({
  first_name      : { type: String, required: true},
  last_name       : { type: String, required: true},
  address	        : { type: String, required: true},
  zip		          : { type: Number, required: true},
  weight          : { type: Number},
  age		          : { type: Number, required: true},
  phone		        : { type: Number, required: true, unique: true},
  _isAdmin	      : { type: Boolean, required: true},
  _isDeleted      : { type: Boolean, default: false},
  _action_disabled: { type: Boolean, default: false}
},
{
  timestamps: true
});
appdataSchema.plugin(mongoosePaginate);

// we need to create a model using it
var Appdata = mongoose.model('Appdata', appdataSchema);


// make this available to our Appdatas in our Node applications
module.exports = Appdata;   