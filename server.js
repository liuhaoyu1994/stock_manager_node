const express = require('express');
const app = express();
console.log("ok");

app.listen(3000, function () {
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
});