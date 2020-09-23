var mongoose = require('mongoose');
var Schema = mongoose.Schema

var imageSchema = new Schema(
 {
  image: { type: String },
 });

module.exports =  mongoose.model('image', imageSchema);