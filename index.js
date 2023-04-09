const express = require('express');
const app = express();
const phones = require('./phones.json');
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World! mama');
});

app.get('/phones', (req, res) => {
    res.send(phones);
});

app.get('/phones/:id', (req, res) => {
    console.log(phones);
    const phone = phones.data.find(phone => phone.id === parseInt(req.params.id)) || 'Phone not found';
    res.send(phone);
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});