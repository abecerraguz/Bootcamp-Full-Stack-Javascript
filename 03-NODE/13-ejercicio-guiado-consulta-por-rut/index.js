const http = require('http');
const url = require('url');

http
   .createServer((req,res)=>{
        const params = url.parse(req.url,true).query
        console.log('Salida de params-->',params);


        let users = [{
            rut:'123456789',
            nombre:'Pedro',
            apellido:'Fernadez'
        }]


        if(req.url.includes('/usuarios')){
            let usuario = users.find((u)=> u.rut == params.rut)

            // if(usuario){
            //     res.write(`Usuario encontrado, Nombre:${usuario.nombre} - Apellido:${usuario.apellido}`)
            // }else{
            //     res.write('No existe ninguna persona con ese RUT')
            // }

            usuario ? res.write(`Usuario encontrado, Nombre:${usuario.nombre} - Apellido:${usuario.apellido}`)
            :
            res.write('No existe ninguna persona con ese RUT')

        }
        res.end()
   })

   .listen(8080,()=> console.log('Escuchando el puerto 8080'))