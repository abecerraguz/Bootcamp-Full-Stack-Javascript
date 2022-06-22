console.log()
console.log('=================CLASE ESTUDIANTE=================')

class Estudiante{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

let e1 = new Estudiante('Juan',35);
console.log(e1);

console.log()
console.log('================CLASE CARTA=======================')
console.log()
/*

    Ejercicio propuesto (4)
    Utiliza la sintaxis de clases (class) 
    de ES6 para reescribir el siguiente código:

    function Carta(numero, pinta){
        this.numero = numero;
        this.pinta = pinta;
    }
    var corazones = new Carta(10,'Corazones');

*/

class Carta{
    constructor(numero,pinta){
        this.numero = numero;
        this.pinta = pinta;
    }
}
var corazones = new Carta(10,'Corazones');
console.log(corazones)

console.log()
console.log('================CLASE CUADRADO=======================')
console.log()
/**
 
    Ejercicio guiado: Agregar un método 
    a un objeto con clases de ES6.
 
    Crear una clase para una figura geométrica, como un cuadrado, para así recibir el valor de
    uno de los lados como atributo y luego retornar el valor del área de la figura geométrica, pero
    mediante la implementación de un método denominado “calcularArea”. Para esto debemos
    realizar los siguientes pasos:

 */

    class Cuadrado{
        constructor(lado){
            this.lado = lado
        }
        calcularArea(){
            return this.lado * this.lado
        }
    }

    let c1 = new Cuadrado(5);
    console.log('Salida de metodo calcularArea()', c1.calcularArea());

console.log()
console.log('================ CLASE USUARIO CON METODO =======================')
console.log()

    /*
        Un metodo en ECMA5 se agrega
        a traves de su prototipo.

        Cuadrado.prototype.calcularArea = function(){
            return this.lado * this.lado
        }

    */

    /*
        Ejercicio propuesto (5)
        Utiliza la sintaxis de clases (class) de ES6 para reescribir el siguiente código:

        function Usuario(nombre, rut) {
            this.nombre = nombre;
            this.rut = rut;
        }

        Usuario.prototype.saludar = function () {
            console.log(`Hola soy ${this.nombre} y mi rut es: ${this.rut}`);
        };

        var u1 = new Usuario("Jocelyn", "17.123.456-7");
        u1.saludar();

    */

    class Usuario{
        constructor(nombre,rut){
            this.nombre = nombre;
            this.rut = rut
        }

        saludar(){
            return console.log(`Hola soy ${this.nombre} y mi rut es: ${this.rut}`);
        }
    }

    var u1 = new Usuario("Jocelyn", "17.123.456-7");
    u1.saludar();

console.log()
console.log('================Implementando clases de ES6 a partir de un diagrama UML PAG 37 =======================')
console.log()

class Rectangulo {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
    calcularArea() {
        return this.x * this.y;
    }
    calcularPerimetro() {
        return (this.x + this.y) * 2;
    }
}

class Circulo {
    constructor(r) {
        this.r = r;
    }
    calcularArea() {
        return this.r * this.r * Math.PI;
    }
    calcularPerimetro() {
        return this.r * Math.PI * 2;
    }
}

let rectangulo1 = new Rectangulo(3,4);
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());

let circulo1 = new Circulo(3);
console.log(circulo1.calcularArea());
console.log(circulo1.calcularPerimetro());


console.log()
console.log('================ CLASE GETTER Y SETTER CON ECMA6 =======================')
console.log()

class Perro{

    constructor(raza){
        this._raza = raza;
    }

    get raza(){
        return this._raza;
    }
    // Modificador
    set raza(nueva_raza){
        this._raza = nueva_raza;
    }

}

let perro1 = new Perro('Pastor Aleman');
console.log(perro1.raza);
perro1.raza = 'Pastor Belgaa';
console.log(perro1.raza);

/*

    class Person {
        constructor(firstname, lastname) {
            this._firstname = firstname;
            this._lastname = lastname;
        }

        get firstname() {
            return this._firstname;
        }

        set firstname(name) {
            this._firstname = name;
        }

        get lastname() {
            return this._lastname;
        }

        set lastname(name) {
            this._lastname = name;
        }
    }

    let person = new Person('John', 'Doe');

    console.log(person.firstname, person.lastname); // John Doe

    person.firstname = 'Foo';
    person.lastname = 'Bar';

    console.log(person.firstname, person.lastname); // Foo Ba


*/


      

  




