console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2]
console.log('process', process.argv);
console.log('Yargs', argv)
if (command === 'add') {
    console.log('adding new notes');
    notes.addNotes(argv.title, argv.body);
} else if (command === 'list') {
    console.log('Listing all notes');
    notes.getAll()
} else if (command === 'read') {
    console.log('Reading note');
    notes.getNotes(argv.title)
} else if (command === 'remove') {
    console.log('Removing note');
    notes.removeNotes(argv.title);
} else {
    console.log('command not recognised');
}

