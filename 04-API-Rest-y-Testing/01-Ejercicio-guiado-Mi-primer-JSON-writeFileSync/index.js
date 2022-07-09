const fs = require('fs')

let miAuto = {
marca : 'Lamborghini',
modelo: ' AVENTADOR SX',
}

fs.writeFileSync('MiAuto.json', JSON.stringify(miAuto))