var mongoose = require('mongoose');
var Schema = mongoose.Schema

var todoSchema = new Schema(
 {
  title: { type: String },
  description:    { type: String}
 });

module.exports =  mongoose.model('todo', todoSchema);