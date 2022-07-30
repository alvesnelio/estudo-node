const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name){
  this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');
chapolin.on('help', () => {
  console.log(`Eu! o ${chapolin.name} colorado!`);
});

console.log("Oh! E agora, quem poderá me defender?");
chapolin.emit('help');

console.log("Quem é o heroi mais forte do mundo?");
chapolin.emit('help');