var express = require('express');
var app = express();
var port = 8888 

app.get('/wish', (req, res) => {
  let name = req.query.name ?? 'Guest'
  res.send(`<h1>Hello, ${name}</h1>`)
})

app.get('/greet/:name/:case', (req, res) => {
    console.log(req.params)
    let name = req.params.name // route parameter
    if (req.params.case == 'u')
        name = name.toLocaleUpperCase()
    else
        name = name.toLocaleLowerCase()
    res.send(`<h1>Hello ${name}</h1>`)
  })

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to Express</h1>`)
})

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  