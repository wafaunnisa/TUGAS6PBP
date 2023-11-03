const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const data = getserver('./motoGP.json'); // Perbaiki nama file menjadi 'motoGP.js'
    res.json(data);
});

app.get('/name', (req, res) => {
    const data = getserver('./name.json');
    res.json(data);
});

app.get('/country', (req, res) => {
    const data = getserver('./country.json'); // Harusnya juga file 'name.js'
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server port Anda adalah ${port}`);
});

const getserver = (path) => {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}