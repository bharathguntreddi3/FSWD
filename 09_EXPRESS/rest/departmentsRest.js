var express = require('express');
var { connectionDetails } = require("./database")
var mysql2 = require("mysql2/promise")
const port = 8888
var app = express();

// Middleware to parse the body of the request
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

// GET /departments - Get all department
app.get('/departments', async (req, res) => {
  try {
    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.query
      ('SELECT * FROM departments');
    connection.close()
    res.json(results)  // send json to client 
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message); // send error to client
  }
})

// GET /departments/cs   - Get One department 
app.get('/departments/:dept_id', async (req, res) => {
  try {
    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.query
      ('SELECT * FROM departments where dept_id = ?', [req.params.dept_id]);
    connection.close()

    if (results.length > 0)
      res.json(results[0])  // send json to client 
    else
      res.status(404).send("Department Id Not Found!") // 404 Not Found
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message); // 500 Internal Server Error
  }
})

// POST  /departments  - Insert a new department 
app.post('/departments', async (req, res) => {
  try {
    if (!req.body.dept_id || !req.body.dept_name) {
      res.status(400).send("Invalid Data!")
      return;
    }
    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.execute
      ('insert into departments(dept_id,dept_name) values(?,?)',
        [req.body.dept_id, req.body.dept_name]
      );
    connection.close()
    res.status(201).send(req.body)  // created 
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message);
  }
})

// DELETE department/ai  - Delete a department
app.delete('/departments/:dept_id', async (req, res) => {
  try {
    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.query
      ('delete from departments where dept_id = ?', [req.params.dept_id]);
    connection.close()

    if (results.affectedRows == 1)
      res.status(204).send("")
    else
      res.status(404).send("department Id Not Found!")
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message);
  }
})

// PUT departments/10  - Update an departments 
app.put('/departments/:dept_id', async (req, res) => {
  try {
    if (!req.body.dept_name) {
      res.status(400).send("Invalid Data!")
      return;
    }

    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.query
      ('update employees set dept_name = ? where dept_id = ?', [req.body.dept_name, req.body.dept_id]);
    connection.close()

    if (results.affectedRows == 1)
      res.send("Updated Successfully!")
    else
      res.status(404).send("department Id Not Found!")
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message);
  }
})

app.listen(port, () => {
  console.log(`Employees REST API listening on port ${port}`)
})
