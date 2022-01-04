const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArr){

  // console.log(body);
  noteArr.push(body);

  setId(noteArr)

  return noteArr
};

function findById(id, notesArr) {
  const result = notesArr.filter(note => note.id === id)[0];
  return result;
}

function setId(notesArr){
  notesArr.forEach(note => { note.id = notesArr.indexOf(note)});
  return notesArr
}


function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }

  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

function deleteNote (note_id, noteArr){
  // console.log(noteArr);
  console.log(note_id);

  noteArr.splice(note_id, 1);

  setId(noteArr);

  console.log(noteArr);
  return noteArr;
};

module.exports = {
  findById,
  createNewNote,
  deleteNote,
  validateNote,
  setId
};
