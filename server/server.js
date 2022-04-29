const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const users = require('./routes/users')

const property = require('./routes/properties')

const { ACCESS_TOKEN_SECRET, DB_CONNECTION } = process.env;

const app = express();

mongoose.connect(process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));

db.once('open', () => console.log('Connected to New MongoDB Project'));

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.options('*', cors());

//Path? Mount Path?
app.use('/users', users);
app.use('/property', property)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {  
  console.log(`Listening on http://localhost:${PORT}`);
});
