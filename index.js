const express = require('express');
const app = express()
const port = process.env.PORT || 1800;

app.get('/', (req, res) => res.send('Hello World!'+port))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))