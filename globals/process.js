// console.log(process);

// console.log(process.argv);

const firstName = process.argv[2];
const lastName = process.argv[4];

console.log(`Seu nome é: ${firstName} ${lastName}`);

console.log("Seu nome é " + process.argv[2]+"."+" Seu sobrenome é "+process.argv[3]+"."+" Seu nome completo é "+process.argv[2]+" "+process.argv[3]+".");