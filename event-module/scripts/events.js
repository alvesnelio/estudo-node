const { EventEmitter } = require('events');
const ev = new EventEmitter();

// Sempre esta escutando.
ev.on('saySomethingOn',(message) => {
  console.log(`Eu estou ouvindo você: ${message}!`);
});

// Escuta apenas uma vez, indepenedente do número de vezes que o evento é emitido.
ev.once('saySomethingOnce',(message) => {
  console.log(`Eu estou ouvindo você: ${message}!`);
});

ev.emit('saySomethingOn', "Nélio");
ev.emit('saySomethingOn', "Izabela");
ev.emit('saySomethingOn', "Manuela");

ev.emit('saySomethingOnce', "Nélio");
ev.emit('saySomethingOnce', "Izabela");
ev.emit('saySomethingOnce', "Manuela");