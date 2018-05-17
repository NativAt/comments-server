const util = require('../util/comments');

// get all comments or comments by regex expression
const getComments = async (req, res) => {
  let query = {};

  try {
    query = req.query.filter ? { email: new RegExp(`.*${req.query.filter}.*`, 'i') } : query;
    const comments = await util.getComments(query);
    return res.json(comments);
  } catch (err) {
    return res.status(500).send(`Internal server error: ${err}`);
  }
};

// create new comment
const createComment = async (req, res) => {
  try {
    const newComment = await util.createComment(req.body.email, req.body.message, req.body.image);
    return res.json(newComment);
  } catch (err) {
    return res.status(500).send(`Internal server error: ${err}`);
  }
};

module.exports = {
  getComments,
  createComment,
};
