const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

require('./index');

app.use(bodyParser.json());
app.use(cors());

const commentsRoute = require('./routes/comments');

app.use('/api/v1/comments', commentsRoute);

// api validation error handler
app.use((err, req, res) => {
  if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }
  return res.status(500).send(`Internal server error: ${err}`);
});

app.listen(8080, () => console.log('listening on port 8080!'));
