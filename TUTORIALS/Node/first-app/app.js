// let log = require('./logger');
// log('message');
// const path = require('path');
// var pathObj = path.parse(__dirname);
// console.log(pathObj)
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory:  ${totalMemory}`);
// console.log(`Free Memory:  ${freeMemory}`);

const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);


// In async way to call
// fs.readdir('', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// })

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listner
emitter.on('messageLogged', function(arg){
    console.log('listner called', arg)
})

// Raise an event
emitter.emit('messageLogged',{id:1, url:'http://'});
