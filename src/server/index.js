const express = require('express');
const os = require('os');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const db = require('./db');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes')(app, db);

app.get('*', (req, res) => {
  res.sendFile(resolve(_dirname, '..', '..', 'public', 'index.html'));
});

/**
 * ===================================
 * Listen to requests on port 8080
 * ===================================
 */

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`~~~ Tuning in to the waves of port ${PORT} ~~~`));

// Run clean up actions when server shuts down
server.on('close', () => {
  console.log('Closed express server');

  db.pool.end(() => {
    console.log('Shut down db connection pool');
  });
});
