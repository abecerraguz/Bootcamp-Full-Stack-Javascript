const axios = require('axios')

let fecha
let magnitud

// const getData = async()=>{

//     let { data } = await
//     // console.log('Salida de data', data )
//     axios.get('https://api.gael.cloud/general/public/sismos')

//     fecha = data[0].Fecha
//     magnitud = data[0].Magnitud

// }

const getData = async () => {
    try {
        const resp = await axios.get('https://api.gael.cloud/general/public/sismos');
        // console.log(resp.data);
        fecha = resp.data[0].Fecha
        magnitud = resp.data[0].Magnitud

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const imprimir = ()=>{
    console.log(`El último sismo fue el ${fecha} y tuvo una magnitud de ${magnitud}`);
}

getData().then(() => {
    imprimir()
})

