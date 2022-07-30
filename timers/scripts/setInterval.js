// setInterval executa uma função N vezes depois de um tempo.

const timeInterval = 1000;
const functionTimeInterval = () => console.log("Checking...");

setInterval(functionTimeInterval, timeInterval);
console.log("Mostrar o final do setInterval");