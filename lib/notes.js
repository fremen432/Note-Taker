const fs = require('fs');
const path = require('path');

// function filterByQuery(query, notesArray) {
// //   let personalityTraitsArray = [];
//   let filteredResults = notesArray;

//   if (query.title) {
//     filteredResults = filteredResults.filter(note => note.title === query.title);
//   }

//   if (query.text) {
//     filteredResults = filteredResults.filter(note => note.text === query.text);
//   }

//   return filteredResults;
// }

// function createNewNote(body, notesArray) {
//   const note = body;
//   notesArray.push(note);

//   fs.writeFileSync(
//     path.join(__dirname, '../db/notes.json'),
//     // JSON.stringify({ notesArray }, null, 2)
//     JSON.stringify(notesArray, 2, null)
//   )
//   return note;
// }

function createNewNote(body, noteArr){
  // const note = body;
  // noteArr.notesArray.push(body);
  noteArr.push(body);
  console.log(noteArr)
  // fs.writeFileSync(
  //     path.join(__dirname, "../db/notes.json"),
  //     JSON.stringify(noteArr.notesArray, 2, null)
  // )
  // return body;
};

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }

  if (!note.text || typeof note.text !== 'string') {
    return false;
  }

//   if (!note.species || typeof note.species !== 'string') {
//     return false;
//   }
//   if (!note.diet || typeof note.diet !== 'string') {
//     return false;
//   }
//   if (!note.personalityTraits || !Array.isArray(note.personalityTraits)) {
//     return false;
//   }
  return true;
}

function deleteNote (note_id, noteArr){
  //delete the note by popping it out of the array
  let id = note_id;
  noteArr.pop(id);

  fs.writeFileSync(
      path.join(__dirname, "../db/notes.json"),
      JSON.stringify(noteArr, 2, null)
  )
  return note;
};

module.exports = {
  // filterByQuery,
  findById,
  createNewNote,
  deleteNote,
  validateNote
};
