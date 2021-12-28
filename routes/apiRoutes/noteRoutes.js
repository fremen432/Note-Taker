// Input comes from:  express node module, functions from lib/notes, data from data/notes
// Output goes to:    '../../server.js'

const router = require('express').Router();
const { 
    filterByQuery, 
    findById, 
    createNewNote, 
    // deleteNote,
    validateNote 
} = require('../../lib/notes');
const { notes } = require('../../db/notes');

// Takes in data from data/notes.json and 'filterByQuery' function from lib/notes.json. 
// Then calls the function when there is a query to GET all notes at the '/notes' route.
router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

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
