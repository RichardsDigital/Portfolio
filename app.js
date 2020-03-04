const ejs = require('ejs');
const php = require('php');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () => {
    console.log('listening on port 3000');
});

controller(app);
