// clearInterval, ele cancela um setInterval registrado.

const timerInterval = 1000;
const functionTimeInterval = () => console.log("Checking...");

const interval = setInterval(functionTimeInterval, timerInterval);

// let item = 0;
// setInterval(function(item) {
//   console.log(`Checking... ${item}`);
//   item+1;
// }, timerInterval);

// setTimeout( () => clearInterval(interval), 5000);


setTimeout( function() { 
  clearInterval(interval, timerInterval);
}, 5000);