const argv = require('yargs')
                .option('m', {
                    alias: 'multiplier',
                    type: 'number',
                    demandOption: true,
                    describe: 'Defines the multiplier'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    default: false,
                    describe: 'Show the table on console'
                })
                .option('t', {
                    alias: 'to',
                    type: 'number',
                    default: 10,
                    describe: 'Defines the number of numbers to be multiplied'
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.m) ){
                        throw 'The multiplier has to be a number'
                    }
                    return true; 
                })
                .argv;

                module.exports = argv;