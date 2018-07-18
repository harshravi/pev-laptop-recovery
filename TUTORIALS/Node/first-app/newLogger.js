// const EventEmitter = require('events');

const Logger = require('./logger1');
const logger = new Logger();

//register a listener

logger.on('messageLogged', (arg) => {
    console.log('Listner called', arg);
})

logger.log('message');