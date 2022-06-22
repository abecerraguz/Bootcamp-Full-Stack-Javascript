/*
=======FUNCIONES DE FELCHA====================================
Los arrow functions son otra forma de declarar funciones 
y fueron agregadas en las últimas versiones, 
la sintaxis es más corta.

=========================================================================
*/

const aprendiendo = function(){
   console.log('Aprendiendo JS') 
}

// const aprendiendo = ()=>{
//     console.log('Aprendiendo JS') 
// }

//const aprendiendo = () => console.log('Aprendiendo JS');

// const aprendiendo = () => 5;
// console.log(aprendiendo())

var num = parseInt(prompt('Ingrese un numero'));
var resultado = 0;

const verificar = (numero) =>{

    if(numero > 0){
        resultado = 'Positivo'
    }else if(numero < 0){
        resultado = 'Negativo'
    }else if(numero == 0){
        resultado = 'Nulo'
    }else{
        resultado = 'No es un numero'
    }

    return resultado
}

alert(`El numero ingresado es ${num}`);

console.log(verificar(num));




