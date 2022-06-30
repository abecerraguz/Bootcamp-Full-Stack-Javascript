/*

Basado en el ejercicio de los sismos, desarrolla una aplicación que utilice una función
asíncrona que consulte un usuario random en el siguiente endpoint
https://randomuser.me/api/. Al usar el método “then” de esta función llamar a otra función
que imprima el nombre y la fecha de nacimiento del usuario recibido.

*/

const axios = require('axios')
let nombreCompleto
let fechaNacimiento


const getData = async () => {
    try {
        const resp = await axios.get('https://randomuser.me/api/');
        // console.log('Nacimineto--->', resp.data.results[0].dob.date);
        const { first,last } = resp.data.results[0].name
        // const { date } = 

        nombreCompleto = `${first} ${last}`;
        fechaNacimiento = resp.data.results[0].dob.date

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const imprimir = ()=>{
    console.log(`El nombre del usuario es ${nombreCompleto} y su fecha de nacimiento es ${fechaNacimiento}`);
}

getData().then(() => {
    imprimir()
})