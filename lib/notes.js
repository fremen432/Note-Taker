// Exports to ../routes/apiRoutes/noteRoutes.js

function createNewNote(body, noteArr){
  noteArr.push(body);

  setId(noteArr)
  return noteArr
};

function findById(id, notesArr) {
  const result = notesArr.filter(note => note.id === id)[0];
  return result;
};

// Adds an "id" value to each element in notesArr based on its index
function setId(notesArr){
  notesArr.forEach(note => { note.id = notesArr.indexOf(note)});
  return notesArr
};

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  };
  if (!note.text || typeof note.text !== 'string') {
    return false;
  };
  return true;
};

function deleteNote (note_id, noteArr){
  // Targets index of node_id in noteArr and deletes 1 item
  noteArr.splice(note_id, 1);

  setId(noteArr);
  return noteArr;
};

module.exports = {
  findById,
  createNewNote,
  deleteNote,
  validateNote
};
