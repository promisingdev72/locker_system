const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'locker_system',
});
connection.connect((err) => {
  if (err) throw err;
  console.log('server connected with DB!');
});
