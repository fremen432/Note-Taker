// Input comes from:  express node module, functions from lib/notes, data from data/notes
// Output goes to:    '../../server.js'

const router = require('express').Router();
const { 
    // filterByQuery, 
    findById, 
    createNewNote, 
    deleteNote,
    validateNote 
} = require('../../lib/notes');
// const { notesArray } = require('../../db/notes');
const notes = require('../../db/notes.json');
const { v1: uuidv1, v4: uuidv4 } = require("uuid");


// Takes in data from data/notes.json and 'filterByQuery' function from lib/notes.json. 
// Then calls the function when there is a query to GET all notes at the '/notes' route.
router.get('/notes', (req, res) => {

  // let results = notesArray;
  // let results = notes;
  
  // if (req.query) {
  //   results = filterByQuery(req.query, results);
  // }
  res.json(notes);
});

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

    // console.log(notes.length);
//   set id based on what the next index of the array will be

  // req.body.id = notesArray.length.toString();
  // req.body.id = notes.length.toString();
  req.body.id = uuidv4();

  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    // const note = createNewNote(req.body, notesArray);
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

//delete route, delete note base on ID passed in
router.delete("/notes/:id", (req, res) => {
  //passing in the id and the notes array

  // deleteNote(req.params.id, notesArray);
  deleteNote(req.params.id, notes);
  
  //return the updated note list

  // res.json(notesArray);
  res.json(notes);
})

// router.delete('/notes', (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = notes.length.toString();

//   if (!validateNote(req.body)) {
//     res.status(400).send('The note is not properly formatted.');
//   } else {
//     const note = deleteNote(req.body, notes);
//     res.json(note);
//   }
// });

module.exports = router;
