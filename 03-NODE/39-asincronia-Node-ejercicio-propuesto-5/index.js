const axios = require('axios');

console.clear()

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
            name:respPropPoke.data.name,
            peso:respPropPoke.data.height,
            alto:respPropPoke.data.weight
        } 

        return propiedades

    } catch (error) {
        console.log(error);
    }
}

getDataNamePoke()
    .then((results)=>{
        // console.log('Salida de results--->',results)
        results.forEach(element => {
            imprimir(element.name)
                        .then(( results )=>{
                            console.log(`${results.name} => Alto:${results.alto} - Peso:${results.peso}`)
                        })
        });  
    })
    .catch((error)=>{
        console.log(error)
    })