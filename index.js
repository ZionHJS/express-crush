const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

//init middleware logger
app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');

//Body Parser Middldware to help handle urlencoded data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Homepage Route
app.get('/', (req, res) => res.render('index', {
    title:'Member App';
}));

//Set static folder then we can put lots of static pages in it!
app.use(express.static(path.join(__dirname, 'public')));

//members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

//listen()
app.listen(PORT, () => console.log('Server started on port ${PORT}'));

