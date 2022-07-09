const fs = require('fs')
//Paso 1
fs.readFile('tareas.txt', 'utf8',(err, data) => {
 
    fs.writeFile('tareas.txt', data +' 2) Cocinar para mañana', 'utf8',() => {
        console.log('Archivo sobrescrito con éxito')
    })
    
})