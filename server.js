const express = require('express');
const routes = require('./routes');
const db = require('./db/db.json');
const PORT = process.env.PORT || 3001;


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
