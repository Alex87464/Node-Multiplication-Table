const fs = require('fs');
const colors = require('colors');



const createFile =  async(multiplier = 5, list = false, t = 10) => {

    try { 
        
        let output = '';
        
        for (let i = 1; i <= t; i++) {
            output += `${multiplier} x ${i} = ${multiplier*i}\n`;
        }
        
        if( list ) {
            console.log('==================='.green.bold);
            console.log(`   Table of: ${multiplier}`.white.bold);
            console.log('==================='.green.bold);
            console.log(`${output}`.green);
        }
             
        fs.writeFileSync(`./output/tableOf-${multiplier}.txt`, output);
    
        return `table-${multiplier}.txt`;
        
    } catch (err) {
        throw err;
    }       
}

module.exports = {
    createFile
}