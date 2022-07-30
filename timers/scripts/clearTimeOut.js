// clearTimeout cancela a execução de um setTimeout.

const timeOut = 3000;
const functionTimeOutFinished = () => console.log("Chegamos aquiiii!!! Viva la vida");

let timer = setTimeout(functionTimeOutFinished, timeOut);

clearTimeout(timer);