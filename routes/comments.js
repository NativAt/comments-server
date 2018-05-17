const router = require('express').Router();
const commentsController = require('../controllers/comments');
const commentsSchema = require('../validations/commentsSchema');
const expressJoi = require('express-joi-validator');

router.get('/', commentsController.getComments);
router.post('/', expressJoi(commentsSchema), commentsController.createComment);


module.exports = router;
