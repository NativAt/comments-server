const comments = require('../models/comments');

exports.getComments = (query) => {
  try {
    return comments.find(query).sort({ createdAt: -1 });
  } catch (err) {
    throw err;
  }
};

exports.createComment = async (email, message, image) => {
  try {
    const Comment = comments;
    const newComment = new Comment({ email, message, image });
    return newComment.save();
  } catch (err) {
    throw err;
  }
};
