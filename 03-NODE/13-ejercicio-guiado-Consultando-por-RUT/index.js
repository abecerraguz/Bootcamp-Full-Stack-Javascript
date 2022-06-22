const http = require('http')
// Paso 1
const url = require('url')
http
.createServer(function (req, res) {
// Paso 2
const params = url.parse(req.url, true).query
console.log(params)
// Paso 3
let users = [{
    rut: '123456789',
    nombre: 'Pat',
    apellido: 'Morita',
},]
// Paso 4
if (req.url.includes('/usuarios')) {
    // Paso 5
    let usuario = users.find((u) => u.rut == params.rut)
    // Paso 6
    usuario
    ? res.write(`¡Usuario encontrado! Nombre: ${usuario.nombre} - Apellido: ${usuario.apellido}`)
    : 
    res.write('No existe ninguna persona registrada con ese RUT')
}
res.end()
})
.listen(8080, () => console.log('Escuchando el puerto 8080'))

// http://localhost:8080/usuarios?rut=123456789