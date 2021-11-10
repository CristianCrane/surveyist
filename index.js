const express = require('express');
const app = express(); // use me to setup app configs

// example route handler in express
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.get('/bye', (req, res) => {
    res.send({ bye: 'buddy' });
});

// heroku will populate the port dynamically
const PORT = process.env.PORT || 5000;
app.listen(PORT);
