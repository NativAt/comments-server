const mongoose = require('mongoose');

const { Schema } = mongoose;


const CommentSchema = new Schema({
  email:   { type: String },
  image:   { type: String },
  message: { type: String },
}, { versionKey: false, timestamps: true });


module.exports = mongoose.model('Comments', CommentSchema, 'comments');
