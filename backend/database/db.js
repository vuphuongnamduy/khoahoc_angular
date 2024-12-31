const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'khoahoc_trading',
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("Đã kết nối với MySQL...");
});

module.exports = connection;
