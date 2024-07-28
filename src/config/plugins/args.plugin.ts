import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limita la cantidad de elementos a mostrar',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'tabla',
    describe: 'Nombre del archivo a guardar',
  })
  .option('d', {
    alias: 'dir',
    type: 'string',
    default: 'outputs',
    describe: 'Directorio donde se guarda el archivo',
  })
  .check((argv, options) => {
    if (argv.b < 1) throw 'La base debe ser mayor a 0';

    return true;
  })
  .parseSync();
