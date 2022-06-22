/*
    Realizar el siguiente ejercicio de clases mediante herencia prototípica con nomenclatura de
    ES5, para ver en acción los prototipos, primeramente con un ejercicio sin métodos en la
    clase padre. Luego, convertir el código anterior a uno actualizado implementado ES6.

    Crear una clase padre o principal, mediante una función constructora con el nombre de
    “FiguraGeometrica”, la cual recibe como parámetros los valores de un lado de la figura.

    Además, se solicita crear una clase denominada “Polígono”, pero que herede las
    propiedades de la clase padre. Además, la clase Polígono debe poseer un método propio
    que permita calcular el área de la figura geométrica con las propiedades inicializadas en la
    clase padre.

*/

//CLASE PADRE
function FiguraGeometrica(lado){
    this.lado = lado;
}

/*
    Crear la función constructora para la clase de Polígono, pero como esta
    clase será  hija, es decir, hereda de una clase padre “FiguraGeometrica” los
    atributos y métodos que ella posea, se debe hacer el llamado a las propiedades de la
    clase padre, para ello se debe implementar el método call().
*/

function Poligono(lado){
    // Con el metodo call() se hace llamada a las propiedades de la clase padre
    FiguraGeometrica.call(this, lado);
}

/*
    Ya nuestra clase hija “Polígono”, realiza el llamado a las propiedades de la
    clase padre, por lo que hace falta indicarle a ambas clases que una es extensión de
    la otra (extends ECMA6), esto lo lograremos mediante la instrucción “Object.create”, asignando al
    prototipo de la clase hija “Polígono” como nuevo objeto el prototipo de la clase padre:
*/

Poligono.prototype = Object.create(FiguraGeometrica.prototype);

/*
    El  último paso para poder completar la clase hija con lo indicado en el
    ejercicio, es crear un método para el cálculo del  área del Polígono, el cual se
    realizará  como se ha trabajado hasta el momento, agregandolo al prototipo de la
    clase, como se muestra a continuación:
*/

Poligono.prototype.calcularArea = function(){
    return this.lado * this.lado;
}

var cuadrado = new Poligono(3);
//console.log(cuadrado);// FiguraGeometrica { lado: 3 }
//console.log(cuadrado.calcularArea()); // 9







