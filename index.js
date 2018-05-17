// connnect mongoose to database
const mongoose = require('mongoose');

// set up default mongoose connection
const { connectionString } = require('./config');

mongoose.connect(`${connectionString}/comments`);

const db = mongoose.connection;

// bind connection to error event
db.on('error', console.error.bind(console, 'connection error:'));
