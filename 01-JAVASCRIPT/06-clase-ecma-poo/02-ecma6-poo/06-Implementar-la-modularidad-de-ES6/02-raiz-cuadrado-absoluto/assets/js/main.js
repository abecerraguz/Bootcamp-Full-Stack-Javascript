import calculadora from './calculadora.js';

let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

calcular.addEventListener('click',(e)=>{

    e.preventDefault()

    let opera = document.getElementById('opera').value;
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    if (opera == 'raiz' || opera == 'cuadrado' || opera == 'absoluto'  && a ){
        console.log('metodo claculadora-->', calculadora[opera] )
        resultado.innerHTML = calculadora[opera](parseInt(a),parseInt(b));
    }else {
        alert("Ingrese una operación (raíz, cuadrado, absoluto) y un valor en la casilla")
    }

});