const express = require('express');
const api = require('./routes/index.html')
const db = require('./db/db.json');
const PORT = 3001;


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/', (req, res) => res.json(db));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
