const fs = require('fs');
const path = require('path');

function filterByQuery(query, notesArray) {
//   let personalityTraitsArray = [];
  let filteredResults = notesArray;
//   if (query.personalityTraits) {
//     if (typeof query.personalityTraits === 'string') {
//       personalityTraitsArray = [query.personalityTraits];
//     } else {
//       personalityTraitsArray = query.personalityTraits;
//     }
//     console.log(personalityTraitsArray);
//     personalityTraitsArray.forEach(trait => {
//       filteredResults = filteredResults.filter(
//         note => note.personalityTraits.indexOf(trait) !== -1
//       );
//     });
//   }
//   if (query.diet) {
//     filteredResults = filteredResults.filter(note => note.diet === query.diet);
//   }
//   if (query.species) {
//     filteredResults = filteredResults.filter(note => note.species === query.species);
//   }
//   if (query.name) {
//     filteredResults = filteredResults.filter(note => note.name === query.name);
//   }

  if (query.title) {
    filteredResults = filteredResults.filter(note => note.title === query.title);
  }

  if (query.text) {
    filteredResults = filteredResults.filter(note => note.text === query.text);
  }

  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

// function deleteNote(body, notesArray) {
//   const note = body;
//   notesArray.push(note);
//   fs.writeFileSync(
//     path.join(__dirname, '../db/notes.json'),
//     JSON.stringify({ notesArray }, null, 2)
//   );
//   return note;
// }

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

module.exports = {
  filterByQuery,
  findById,
  createNewNote,
//   deleteNote,
  validateNote
};
