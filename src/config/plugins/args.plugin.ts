import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'It is the base of the multiplication table',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limits the number of elements to display',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Displays the table in the console',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'Name of the file to save',
  })
  .option('d', {
    alias: 'dir',
    type: 'string',
    default: 'outputs',
    describe: 'Directory where the file is saved',
  })
  .check((argv, options) => {
    if (argv.b < 1) throw 'The base must be greater than 0';

    return true;
  })
  .parseSync();
