const http = require('http')
http
.createServer(function (req, res) {
    // Paso 3
    console.log('¿Aló? ¿Quién habla?')
})
.listen(8080, () => console.log('Escuchando el puerto 8080')) // Paso 4

// curl http://localhost:8080/ 