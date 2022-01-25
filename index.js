const express = require('express');
const db = require('./helper/Connect');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const blogRouter = require('./routes/Blog');
const cmtRouter = require('./routes/Comment');

app.use(cors());
app.use(bodyParser.json());

db.connectDB();

app.use('/api',
    [blogRouter, cmtRouter]);

app.listen(3000, () => console.log('Start Serve PORT :' + 3000));

