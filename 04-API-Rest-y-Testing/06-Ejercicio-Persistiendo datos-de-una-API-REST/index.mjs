import http from 'http';
import url from 'url';
import fs from 'fs';
import axios from 'axios'


const server = http.createServer((req,res)=>{
    // URL DEL QUERY STRINGS
    const { name, lastname, email, password } = url.parse(req.url,true).query;
    
    let usuario = {
        name,
        lastname,
        email,
        password,
    };

    let data = JSON.parse(fs.readFileSync("usuarios.json", "utf8"));
    let usuarios = data.usuarios;

    if (req.url.startsWith("/nuevoUsuario")) {
   
        usuarios.push(usuario);
        fs.writeFileSync("usuarios.json", JSON.stringify(data));
        res.end();

    }

    if (req.url.startsWith("/random")) {
        axios
            .get("https://randomuser.me/api/")
            .then((datos) => {

                let randomUser = datos.data.results[0];

                usuario = {
                    name: randomUser.name.first,
                    lastname: randomUser.name.last,
                    email: randomUser.email,
                };

                usuarios.push(usuario);
                fs.writeFileSync("usuarios.json", JSON.stringify(data));
                res.end();

            })
            .catch((e) => {
                res.end(e.message);
            });
        }
    
})
server.listen(3000, ()=>{console.log('Servidor arriba en el puerto 3000')})
