const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){
        // send the Http req
        console.log(message);
        // Raised an event
        this.emit('messageLogged', {id:1, url: 'http://'})
    }
}    

module.exports = Logger;