var express = require('express');
var app = express();
var port = 8888 

app.get('/wish', (req, res) => {
    console.log(req.query)
    let name = req.query.name ?? 'Guest'
    res.send(`<h1>Hello ${name.toUpperCase}</h1>`)
})

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})