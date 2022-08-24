const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

createFile(argv.m, argv.l, argv.t)
    .then( nameFile => console.log(nameFile, 'created') )
    .catch( err => console.log(err) );