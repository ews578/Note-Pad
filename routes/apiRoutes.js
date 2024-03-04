const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uniqid =require('uniqid');



//http://localhost:3001/api/notes  
  router.get('/notes', (req, res) => {
     fs.readFile('./db/db.json', 'utf-8', (err,data) => {
        res.json(JSON.parse(data))
     })
    });
    router.post('/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf-8', (err,data) => {
            const notes = JSON.parse(data)
            const {title,text} = req.body
            const newNotes = {
                title,text,id:uniqid()
            }
            notes.push(newNotes)
            fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, '\t'))
            res.json(notes)
         })
    }) 
    router.delete('/notes/:noteId', (req, res)=> {
        fs.readFile('./db/db.json', 'utf-8', (err,data) => {
          const newData = JSON.parse(data)
          const filterData = newData.filter(note => note.id != req.params.noteId)  
          fs.writeFile('./db/db.json', JSON.stringify(filterData), err => {
            res.json(filterData)
          })
         })
    })


module.exports = router