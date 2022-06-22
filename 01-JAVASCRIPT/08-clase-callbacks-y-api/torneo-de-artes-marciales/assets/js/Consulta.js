// 4. Realizar por lo menos una función autoejecutable IIFE.4
const dataPersonajes = ( async ()=>{

    const respuesta = await fetch("http://127.0.0.1:5501/08-clase-callbacks-y-API/apoyo-torneo-de-artes-marciales/dbz.json");
    const data = await respuesta.json();
    return data

})();

export default dataPersonajes;