console.log('starting notes.js');

var addNotes = (title, body) => {
    console.log('Adding notes', title, body);
}
var getAll = () => {
    console.log('getting all notes')
}
var getNotes = (title) => {
    console.log('Getting note', title);
}
var removeNotes = (title) => {
    console.log('Removing notes', title)
}
module.exports = {
    addNotes,
    getAll,
    getNotes,
    removeNotes
}