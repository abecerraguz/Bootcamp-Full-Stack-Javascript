const http = require('http');
const fs =require('fs');
const axios = require('axios');

// console.clear()
let arr = []

const getDataNamePoke = async () =>{
    try {
        const respNamePoke = await axios.get('https://pokeapi.co/api/v2/pokemon');
        let arrPokemones = respNamePoke.data.results
        return arrPokemones

    } catch (error) {
        console.log(error);
    }
}

const imprimir = async( name )=>{
    try {
        const respPropPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        let propiedades = {
            nombre:respPropPoke.data.name,
            img:respPropPoke.data.sprites.other.dream_world.front_default
        } 

        return propiedades

    } catch (error) {
        console.log(error);
    }
}




http
    .createServer((req,res)=>{

       
   
    if(req.url == "/") {

        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("index.html", "utf8", (err, html) => {
         res.end(html);
        });
    }

    if (req.url == "/pokemones"){
        getDataNamePoke()
                .then((results)=>{
                    console.log('Salida de results',results)
                    results.forEach(element => {
                        imprimir(element.name)
                                    .then(( results )=>{
                                        // console.log('Salida de results print',results)
                                        arr.push(results)
                                        
                                        let data = JSON.stringify(arr);
                                        fs.writeFileSync('pokemones.json', data);
                                        
                                    })
                    });  
                })
                .catch((error)=>{
                    console.log(error)
                })
       

        res.writeHead(200, { 'Content-Type': 'application/json' });
        fs.readFile("pokemones.json", (err, json) => {
            res.end(json);
        });
    }

    


    })
    .listen(3000,()=>{console.log('Salida del servidor puerto 3000')})
