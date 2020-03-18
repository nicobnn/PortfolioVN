const express = require('express')
const app2 = express()

app2.get('/', function (req, res) {
  res.send('Hello World!')
})

app2.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app2.use(function (req, res, next) {
    res.status(404).send("ERROR 404")
  })
//app.use(express.static('PortfolioVN/images/404.png'))