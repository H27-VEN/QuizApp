const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// require mongojs see the syntax in mongojs documentation

const app = express();
const port = 3000;
 
const quiz = require('./routes/quiz');

// CORS Middleware
app.use(cors());



app.use('/quiz', quiz);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile("public/index.html");
});


app.listen(port, function() {
    console.log('server started');
});