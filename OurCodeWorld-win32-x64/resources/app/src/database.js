const mysql = require('promise-mysql');

const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'TW0dkF5vYA',
  password: 'nG1btgvDcu',
  database: 'TW0dkF5vYA'
});

function getConnection() {
  return connection;
}

module.exports = { getConnection };