const fs = require('fs');
const colors = require('colors');


// Tarea: convertir esta funcion 'crearArchivo' en promesa
const crearArchivo =  async(base = 5, listar = false, h = 20) => {

    try { 
        
        let salida = '';
        
        for (let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        if( listar ) {
            console.log('==================='.rainbow.bold);
            console.log(`   Tabla del: ${base}.`.rainbow.bold);
            console.log('==================='.rainbow.bold);
            console.log(`${salida}`.random);
        }
             
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt creado`;
        
    } catch (err) {
        throw err;
    }
        
}

module.exports = {
    crearArchivo
}