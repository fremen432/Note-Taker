// Input comes from:  express node module, functions from lib/notes, data from data/notes
// Output goes to:    '../../server.js'

const router = require('express').Router();
const { 
    findById, 
    createNewNote, 
    deleteNote,
    validateNote,
    setId 
} = require('../../lib/notes');
// const { notesArray } = require('../../db/notes');
const notes = require('../../db/notes.json');
const { v1: uuidv1, v4: uuidv4 } = require("uuid");


// Takes in data from data/notes.json and 'filterByQuery' function from lib/notes.json.
// Then calls the function when there is a query to GET all notes at the '/notes' route.
router.get('/notes', (req, res) => res.json(notes));

router.get('/notes/:id', (req, res) => {
  // const result = findById(req.params.id, notesArray);
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {

  // console.log(req.body.id)
  
  // req.body.id = uuidv4();
  // req.body.id = notes.length;

  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

//delete route, delete note base on ID passed in
router.delete("/notes/:id", (req, res) => {
  //passing in the id and the notes array

  // console.log("router.delete works")
  // console.log(notes.length)
  // console.log(req.params.id)
  // console.log(notes)

  deleteNote(req.params.id, notes);
  
  //return the updated note list
  res.json(notes);
})

module.exports = router;
