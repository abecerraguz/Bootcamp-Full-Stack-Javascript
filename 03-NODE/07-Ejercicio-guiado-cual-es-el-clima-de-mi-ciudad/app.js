// Paso 1
const ciudad = 'Concepción';
const https = require('https');
https
.get('https://api.gael.cloud/general/public/clima', (resp) => {
let data = '';
resp.on('data', (chunk) => {
    data += chunk;
});
resp.on("end", () => {
// Paso 2
let climas = JSON.parse(data);
// Paso 3
let miClima = climas.find((c) => c.Estacion == ciudad);
    console.log(miClima);
});
})
.on('error', (err) => {
console.log('Error: ' + err.message);
})