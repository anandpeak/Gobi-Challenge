const express = require('express');
const path = require('path');
var cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  // the __dirname is the current directory from where the script is running
  app.use(express.static('public'));

  // send the user to index html page inspite of the url
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });
}

app.listen(port);
