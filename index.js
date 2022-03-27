const express = require('express');
const port = 80;
const app = express();

app.get('/', (req, res, next) => {
    res.send({
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});