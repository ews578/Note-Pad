const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uniqid =require('uniqid');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
  
  app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/notes.html'));
    });

