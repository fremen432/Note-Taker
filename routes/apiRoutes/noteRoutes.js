// Input comes from:  express node module, functions from lib/notes, data from db/notes
// Output goes to:    '../../server.js'

const router = require('express').Router();
const { 
    findById, 
    createNewNote, 
    deleteNote,
    validateNote
} = require('../../lib/notes');
const notes = require('../../db/notes.json');

router.get('/notes', (req, res) => res.json(notes));

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
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
  deleteNote(req.params.id, notes);
  //return the updated note list
  res.json(notes);
})

module.exports = router;
