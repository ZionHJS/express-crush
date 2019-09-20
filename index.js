const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//init middleware logger
app.use(logger);

//Set static folder then we can put lots of static pages under it!
app.use(express.static(path.join(__dirname, 'public')));

//members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

//listen()
app.listen(PORT, () => console.log('Server started on port ${PORT}'));

