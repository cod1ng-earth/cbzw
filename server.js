const express = require('express');
const winston = require('winston');

const app = express();

app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})