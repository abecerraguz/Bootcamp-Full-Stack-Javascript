const moduloPrueba = (() => {
    let contador = 0;
    return {
        incrementaContador: () => {
            return contador++;
        },
        reseteoContador: () => {
            console.log(`valor del contador antes de reiniciar: ${contador}`);
            contador = 0;
        }
    };
})();

moduloPrueba.incrementaContador()
moduloPrueba.incrementaContador()
moduloPrueba.incrementaContador()
moduloPrueba.reseteoContador()

console.log('=============================================')
/**
 * Ejercicio guiado: IIFE y el encapsulamiento
 * Publico y Privado
 * 
 */

 const contenedor =(()=>{

     let numeroPrivado = 5
     let saludoPrivado = () => "Este es un saludo Privado";

     return{
        saludoPublico : () => "Este es un saludo público",
        saberCualEsElNumeroPrivado : () => `El numero privado es ${numeroPrivado}`
     }

 })()

 console.log(contenedor.saludoPublico())
 console.log(contenedor.saberCualEsElNumeroPrivado())
