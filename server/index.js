const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/../dist'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.listen(port, () => {
  console.log(`Amands's Kitchen app listening on port ${port}`)
})