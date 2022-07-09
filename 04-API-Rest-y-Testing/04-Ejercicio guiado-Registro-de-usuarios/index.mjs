import http from 'http';
import url from 'url';
import fs from 'fs';

//http://localhost:3000/nuevoUsuario?name=Akira&lastname=Toriyama&email=akayama@example.com&password=1234

const server = http.createServer((req,res)=>{
    // URL DEL QUERY STRINGS
    const { name, lastname, email, password } = url.parse(req.url,true).query;
    
    if (req.url.startsWith("/nuevoUsuario")) {
   
        let usuario = {
            name,
            lastname,
            email,
            password,
        };
      
        fs.writeFileSync("usuario.json", JSON.stringify(usuario));
  
        res.end();
    }
    
})
server.listen(3000, ()=>{console.log('Servidor arriba en el puerto 3000')})
