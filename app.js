const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')




// TAREA
// Esta opcion si 'l' es true deberia de aparecer dibujada mi tabla en consola 
// caso contrario (false) solo deberia de aparecer 'Tabla x ha sido creado' y no mostrar la tabla en si.
// -------------------------
// option('l')
// listar
// boolean
// default: false
// -------------------------
// Crear una opcion '-h' | '--hasta' que me defina el limite de la cantidad de elementos que 
// quiero multiplicar. Por ejemplo si pongo mi limite en 20 para la base en 2
// el resultado seria: 2x1, 2x2, ..., 2x19, 2x20.
console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );