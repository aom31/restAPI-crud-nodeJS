var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb_node'
});

//read data
app.get('/users', function (req, res, next) {
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
            res.json(results);
         
        }
      );
      
})

app.get('/users/:id', function (req, res, next) {
    const id = req.params.id;
  
    connection.query(
        'SELECT * FROM `users` WHERE `id` = ? ',
        [id],
        function(err, results) {
            res.json(results);
          
        }
      );
      
})

//create by body in postman
app.post('/users', function (req, res, next) {
    res.json(req.body.fname)
})

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

//insert 


app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})