// IIFE
// Inmmediately Invoked Function Expresion

const sayHi = () =>{
    var a = 1;
    console.log('Hola')
}


sayHi();
// console.log('salida de a', a);

// IIFE
(()=>{
   
})()

let saludoGlobal = (() =>{

    let queHoraEs = (hora) =>{
        console.log(`Son las ${hora} hrs`)
    }

    return {
        mostraHora: (horaActual) => queHoraEs(horaActual)
    };


})();

saludoGlobal.mostraHora('19:00')