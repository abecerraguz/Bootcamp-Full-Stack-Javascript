/*
    EJERCICIO 1
    Traspasa el siguiente objeto a su notación literal y utiliza console.log para verificar el
    resultado.

    var notebook = new Object();
    notebook.make = 'Dell';
    notebook.processor = 'I7';
*/

// SOLUCION
var notebook = {
    make:'Dell',
    processor:'I7'
}

notebook.processor = 'I9';
notebook['make']      = 'HP'

console.log('Salida NoteBook', notebook)

/*  EJERCICIO 2
    Utilizando la sintaxis new Object, crea el objeto estudiante con las propiedades
    nombre y edad, siendo los valores “Juan” y “35” respectivamente para cada
    propiedad.
*/

var estudiante = new Object();
estudiante.nombre = 'Juan'
estudiante.edad   = 35

console.log('Salida Estudiante--->', estudiante)

// Ejercicio propuesto (2)
/*
    Traspasa el siguiente objeto a su notación literal.
    var gato = new Object();
    gato.sonido = function (){
        console.log("miau");
    };
    gato.sonido();
*/

var gato = {
    sonido:function(){
        console.log("miau");
    }
}

gato.sonido();

/*
    Ejercicio propuesto (3)
    Utilizando la sintaxis new Object crea el objeto con el nombre de estudiante, agregando el
    método hablar que muestre en pantalla "Estoy aprendiendo objetos con JS".
*/
console.log('//////////////EJERCICIO 3 ////////////////////')
var estudiante = new Object()
estudiante.nombre = 'Pedro'
estudiante.edad = 30
estudiante.saludar = function(){
    console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años Estoy aprendiendo objetos con JS`)
}

estudiante.saludar()
console.log()
console.log('//////////////EJERCICIO 4 ////////////////////')
/*
    Ejercicio propuesto (4)
    Partiendo del código explicado anteriormente, crea una segunda propiedad llamada edad,
    asigna un valor a ésta y que al llamar al método saludar se muestre en la consola el
    siguiente mensaje: "Hola soy Camila y tengo 30 años".

    Solucion en el anterior Ejercicio tres
*/

console.log()
console.log('//////////////EJERCICIO 5 ////////////////////')
/*
    Ejercicio propuesto (5)
    El siguiente código posee un error, encuéntralo y realiza las modificaciones pertinentes para
    que funcione a la perfección.

    var notebook = new Object();
    notebook.marca = "Dell";
    notebook.obtener_informacion = function(){
        console.log("Computador marca " + marca);
    }
    notebook.obtener_informacion();

*/

var notebook = new Object();
notebook.marca = "Dell";
notebook.obtener_informacion = function(){
    console.log("Computador marca " + this.marca);
}
notebook.obtener_informacion();

console.log()
console.log('//////////////EJERCICIO 6 ////////////////////')
/*
Ejercicio propuesto (6)
Reescribe el siguiente código utilizando una función constructora

    var persona = new Object();
    persona.nombre = "Camila";
    persona.saludar = function(){
        console.log("Hola soy " + this.nombre);
    }
    persona.saludar();

*/

function Persona(nombre){
    this.nombre = nombre
}
let x1 = new Persona('Fernanda')
x1.saludar = function(){
    console.log("Hola soy " + this.nombre); 
}

x1.saludar()

console.log()
console.log('//////////////EJERCICIO 7 ////////////////////')
/*
    Ejercicio propuesto (7)
    Reescribe el siguiente código utilizando prototipos para evitar definir múltiples veces el
    método agregarPuntos.

    function Jugador(nombre){
        this.nombre = nombre;
        this.puntos = 0;
    }
    var jugador1 = new Jugador('Francisca');
    jugador1.agregarPuntos = function(){
        this.puntos = this.puntos + 100;
    }

    var jugador2 = new Jugador('Camilo');
        jugador2.agregarPuntos = function(){
        this.puntos = this.puntos + 100;
    }
    jugador1.agregarPuntos();
    jugador2.agregarPuntos();
    console.log(jugador1);
    console.log(jugador2);
*/

function Jugador(nombre){
    this.nombre = nombre;
    this.puntos = 0;
}

Jugador.prototype.agregarPuntos = function(){
    this.puntos = this.puntos + 100;
}

var jugador1 = new Jugador('Francisca');
// jugador1.agregarPuntos = function(){
//     this.puntos = this.puntos + 100;
// }

var jugador2 = new Jugador('Camilo');
// jugador2.agregarPuntos = function(){
//     this.puntos = this.puntos + 100;
// }

jugador1.agregarPuntos();
jugador2.agregarPuntos();
console.log(jugador1);
console.log(jugador2);

console.log()
console.log('//////////////EJERCICIO 8 ////////////////////')
/*
    Ejercicio propuesto (8)

    Modifica el siguiente codigo utilizando prototipos para evitar tener que definir multiples
    veces la misma funcion.

    function Rectangulo(ancho, alto) { // Funci n constructora
        this.ancho = ancho; // Asignamos ancho inicial
        this.alto = alto; // Asignamos alto inicial
    }
    r1 = new Rectangulo(3, 5); // Creamos una instancia
    r1.calcularArea = function() { // Agregamos el m todo
        return this.ancho * this.alto;
    }
    r2 = new Rectangulo(4, 8); // Creamos una instancia
    r2.calcularArea = function() {
        return this.ancho * this.alto;
    }
    console.log(r1.calcularArea() + r2.calcularArea()); // La suma del area
    de los rectangulos es:
*/

function Rectangulo(ancho, alto) { // Función constructora
    this.ancho = ancho; // Asignamos ancho inicial
    this.alto = alto; // Asignamos alto inicial
}

Rectangulo.prototype.calcularArea = function(){
    return this.ancho * this.alto;
}

console.log()
console.log('//////////////EJERCICIO 9 ////////////////////')
/*
    Partiendo del ejercicio anterior, agrega un nuevo m todo denominado “calcularPerimetro”
    utilizando “prototype”, luego muestra en pantalla la suma de ambos per metros (rect ngulo
    r1 y r2) como un solo resultado. Tips: Per metro de un rect ngulo: 2*(ancho+alto).
*/

Rectangulo.prototype.calcularPerimetro = function(){
    return 2*(this.ancho+this.alto)
}

r1 = new Rectangulo(3, 5); // Creamos una instancia
r2 = new Rectangulo(4, 8); // Creamos una instancia

// La suma del area de los rectangulos es:
console.log(r1.calcularArea() + r2.calcularArea()); 
// La suma del perimetro de los rectangulos es:
console.log(r1.calcularPerimetro() + r2.calcularPerimetro());

console.log()
console.log('//////////////EJERCICIO 10 ( ENCAPSULAMIENTO ) ////////////////////')
/*
    FUNDAMENTOS DEL METODO Object.defineProperty()

    Object.defineProperty( obj, prop, descriptor )

    PARAMETROS  
    obj
    El objeto sobre el cual se define la propiedad.
    prop
    El nombre de la propiedad a ser definida o modificada.
    descriptor
    El descriptor de la propiedad que está siendo definida o modificada.

    ==========================================
    value
    El valor asociado a la propiedad. Puede ser cualquier tipo valido de JavaScript  (number, object, function, etc).
    Por defecto es undefined.
    writable
    true Indica si el valor de la propiedad puede modificarse con el  operador de asignación (en-US).
    Defaults to false.

    Un descriptor de acceso además tiene las siguientes claves opcionales:

    get
    Una función cuyo valor retornado será el que se use como valor de la propiedad.
    Defaults to undefined.

    set
    Una función que recibe como único argumento el nuevo valor que se desea asignar a la propiedad y que devuelve el valor que se almacenará finalmente en el objeto.
    Defaults to undefined.

    let Jupiter ={

        nombre:'Juiter',
        radio:69911000,
        masa:1.899e27,
        gravedad:function(){
            return 6.674e-11*this.masa/(this.radio*this.radio)
        }

    }

    Object.defineProperties(Jupiter,"nombre",{
        configurable:true,
        enumerable:true,
        writable:true,
        value:'planeta'
    })

    Ejercicio propuesto (10)
    Crear una funci n constructora denominada “Usuario”, la cual reciba como par metro el tipo
    de usuario que ingresa a un sistema, es decir, si es Administrador, Invitado o Cliente; esta
    propiedad debe llevar el nombre de “tipo”. Luego protege la propiedad mediante la creaci n
    de una nueva variable local e implementando el m todo Object.defineProperty para
    evitar cambios externos en las propiedades existentes en la funci n constructora.
*/

function Usuario(tipo){
    /*
        Propiedad expuesta por defecto es
        configurable:true,
        enumerable:true,
        writable:true,
    */ 

    //this.tipo = tipo

    /*
        //Para protejer las propiedades de un objeto le quitamos el this que lo expone desde a fuera
        var getTipo = tipo

        // Object.defineProperty( obj, prop, descriptor )
        Object.defineProperty(this,'getTipo',{value: getTipo})
    */ 
    var getTipo = tipo
    Object.defineProperty(this,'getTipo',{value: getTipo})
}

var usuario1 = new Usuario('Administrador')
    usuario1.getTipo = "Invitado"
    console.log(usuario1.getTipo)

console.log()
console.log('//////////////EJERCICIO 11 GETTER SETTER USO DEL DESCRIPTOR ////////////////////')
// EJEMPLO DE GETTER AND SETTER
function Vehiculos(marca) {
    var _marca = marca;

    Object.defineProperty(this, "_getMarca", {
        get: function () {
            return _marca
        }
    });

    Object.defineProperty(this, "_setMarca", {
        set: function (marca) {
            _marca = marca
        }
    });
}

Vehiculos.prototype.getMarca = function(){
    return this._getMarca;
};

Vehiculos.prototype.setMarca = function(marca){
    this._setMarca = marca;
};

var v1 = new Vehiculos("Ford");
console.log(v1.getMarca()); // "Ford"
v1.setMarca("Kia");
console.log(v1.getMarca()); // "Kia"

console.log()
console.log('//////////////SOLUCION EJERCICIO 11 GETTER SETTER USO DEL DESCRIPTOR ////////////////////')

/*
    A partir del siguiente codigo, crea un metodo getter y uno setter para las propiedades de
    numero y pinta, que permitan visualizar y modificar cada uno de ellos.

    function Carta(numero, pinta){
        this.numero = numero;
        this.pinta = pinta;
    }
    c1 = new Carta(2, 'Coraz n');
    c2 = new Carta(4, 'Espadas');
*/

function Carta(numero,pinta){
    var _numero = numero;
    var _pinta  = pinta;

    Object.defineProperty(this, "_getNumero", {
        get: function () {
            return _numero
        }
    });

    Object.defineProperty(this, "_setNumero", {
        set: function (numero) {
            _numero = numero
        }
    });

    Object.defineProperty(this, "_getPinta", {
        get: function () {
            return _pinta
        }
    });

    Object.defineProperty(this, "_setPinta", {
        set: function (pinta) {
            _pinta = pinta
        }
    });
}

Carta.prototype.getNumero = function(){
    return this._getNumero;
}

Carta.prototype.setNumero = function(numero){
    this._setNumero = numero;
}

Carta.prototype.getPinta = function(){
    return this._getPinta;
}

Carta.prototype.setPinta = function(pinta){
    this._setPinta = pinta;
}


var carta1 = new Carta(10,'Diamante')
var carta2 = new Carta(5,'Corazones')


console.log(carta1.getNumero()); // 10
carta1.setNumero(20);
console.log(carta1.getNumero()); // "Kia"

console.log()
console.log('////////////// TRABAJANDO CON MULTIPLES OBJETOS ////////////////////')

function Persona( nombre,mascota ){
    this.nombre = nombre;
    this.mascota = mascota
}

function Mascota (nombre){
    this.nombre = nombre
}

var mascota1 = new Mascota('Choco')
var persona1 = new Persona('Jaun',mascota1)

console.log()
console.log('//////////////SOLUCION EJERCICIO 12 GETTER SETTER EN MULTIPLES OBJETOS ////////////////////')
/*
    Ejercicio propuesto (12)
    Al ejercicio de Persona y Mascota creado anteriormente, agrega getters y setters para
    obtener el nombre de la mascota y el nombre de la persona.
*/

function Persona( nombre,mascota ){

    var _nombre = nombre;
    var _mascota = mascota;

    Object.defineProperty(this, '_getNombre', {
        get: function () {
            return _nombre
        }
    });

    Object.defineProperty(this, '_setNombre', {
        set: function (nombre) {
            _nombre = nombre
        }
    });

    Object.defineProperty(this, '_getMascota', {
        get: function () {
            return _mascota
        }
    });

    Object.defineProperty(this, '_setMascota', {
        set: function (mascota) {
            _mascota = mascota
        }
    });
}

Persona.prototype.getNombre= function(){
    return this._getNombre;
}
Persona.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
}

Persona.prototype.getMascota = function(){
    return this._getMascota;
}
Persona.prototype.setMascota = function(mascota){
    this._setMascota = mascota;
}

function Mascota (nombre){

    var _nombre = nombre;

    Object.defineProperty(this, '_getNombreMascota', {
        get: function () {
            return _nombre
        }
    });
    Object.defineProperty(this, '_setNombreMascota', {
        set: function (nombre) {
            _nombre = nombre
        }
    });
}

Mascota.prototype.getNombreMascota = function(){
    return this._getNombreMascota;
}
Mascota.prototype.setNombreMascota = function(nombre){
    this._setNombreMascota = nombre;
}



var m1 = new Mascota('Snowball');
var p1 = new Persona('Juan', m1);
console.log('p1---->',p1);
console.log('m1---->',m1);
console.log(m1.getNombreMascota());
console.log('p1.getNombre()---->',p1.getNombre());
m1.setNombreMascota('Taty');
console.log(m1.getNombreMascota());

console.log()
console.log('//////////////SOLUCION EJERCICIO 13 GETTER SETTER EN MULTIPLES OBJETOS ////////////////////')
/*

    Ejercicio propuesto (13)
    A partir del siguiente diagrama UML, crea la funci n constructora para cada uno de los
    objetos, as  mismo, crea una instancia de cada objeto.
    
*/

function Empresa( nombre, direccion, persona){

    var _nombre = nombre;
    var _direccion = direccion;
    var _persona = persona;

    Object.defineProperty(this, '_getNombre', {
        get: function () {
            return _nombre
        }
    });
    Object.defineProperty(this, '_setNombre', {
        set: function (nombre) {
            _nombre = nombre
        }
    });

    Object.defineProperty(this, '_getDireccion', {
        get: function () {
            return _direccion
        }
    });

    Object.defineProperty(this, '_setDireccion', {
        set: function (direccion) {
            _direccion = direccion
        }
    });

    Object.defineProperty(this, '_getPersona', {
        get: function () {
            return _persona
        }
    });

    Object.defineProperty(this, '_setPersona', {
        set: function (persona) {
            _persona = persona
        }
    });

}

Empresa.prototype.getNombre = function(){
    return this._getNombre;
}
Empresa.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
}

Empresa.prototype.getDireccion = function(){
    return this._getDireccion;
}

Empresa.prototype.setDireccion = function(direccion){
    this._setDireccion = direccion;
}

function Personaa(nombre,edad){

    var _nombre = nombre
    var _edad = edad

    Object.defineProperty(this, '_getNombrePersona', {
        get: function () {
            return _nombre
        }
    });

    Object.defineProperty(this, '_setNombrePersona', {
        set: function (nombre) {
            _nombre = nombre
        }
    });

    Object.defineProperty(this, '_getEdadPersona', {
        get: function () {
            return _edad
        }
    });

    Object.defineProperty(this, '_setEdadPersona', {
        set: function (edad) {
            _edad = edad
        }
    });

}

Personaa.prototype.getNombrePersona = function(){
    return this._getNombrePersona;
}
Personaa.prototype.setNombrePersona = function(persona){
    this._setNombrePersona = persona;
}

Personaa.prototype.getEdadPersona = function(){
    return this._getEdadPersona;
}
Personaa.prototype.setEdadPersona = function(edad){
    this._setEdadPersona = edad;
}

var per1 = new Personaa('Juan',40)
var emp1 = new Empresa('Nike','Irarrazabal',per1)
console.log('salida emp1-->',per1)
console.log('salida getNombre()-->',emp1.getNombre())
console.log('salida getDireccion()-->',emp1.getDireccion())
console.log('salida getNombrePersona()-->',per1.getNombrePersona())
per1.setNombrePersona('Pedro')
per1.setEdadPersona(21)
console.log('salida getNombrePersona()-->',per1.getNombrePersona())
console.log('salida getEdadPersona()-->',per1.getEdadPersona())

console.log()
console.log('////////////// EJERCICIO CARDINALIDAD ////////////////////')
/*
Ejercicio guiado: Cardinalidad N

Solicitan almacenar información de múltiples personas y cada una de estas personas puede tener múltiples redes sociales, además, cada persona tendrá un número de identiﬁcación “id” distinto. Por lo que se requiere almacenar esa información para cada persona y luego mostrarla. Para detallar mejor este ejercicio, partiremos del diagrama UML mostrado a continuación:

VERSION NO PROTEGIDA
function Humanoide(nombre, redes_sociales){
    this.nombre = nombre;
    // this.redes_sociales = redes_sociales || [];
    this.redes_sociales = redes_sociales;
}

Humanoide.prototype.agregar_redsocial = function(red_social){
    this.redes_sociales.push(red_social);
}

function RedSocial(nombre, id){
    this.nombre = nombre;
    this.id = id;
}

var r1 = new RedSocial('Twitter', '@juanduran85');
var r2 = new RedSocial('GitHub', 'JuanDuran85');
var r3 = new RedSocial('Linkedin', 'abecerraguz');

var h1 = new Humanoide('Juan', [r1,r2,r3]);
h1.nombre = 'Pedro'
r1.nombre = 'Facebook'
console.log(h1)
    
*/

function Humanoide(nombre, redes_sociales){

    this._nombre = function () {
        return nombre;
    }
    this._red_social = function () {
        return redes_sociales || [];
    }

}

Humanoide.prototype.agregar_redesSociales = function(red_social){
    this._redes_sociales.push(red_social);
}

Humanoide.prototype.getNombre = function(){
    return this._getNombre;
}
Humanoide.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
}


function RedSocial(nombre, id){

    var _nombre = nombre;
    var _id     = id
    
 

}

RedSocial.prototype.getNombreRedSocial = function(){
    return this._getNombreRedSocial;
}

RedSocial.prototype.setNombreRedSocial = function(nombre){
    this._setNombreRedSocial = nombre;
}



var r1 = new RedSocial('Twitter', '@juanduran85');
var r2 = new RedSocial('GitHub', 'JuanDuran85');
var r3 = new RedSocial('Linkedin', 'abecerraguz');

var h1 = new Humanoide('Juan', [r1,r2,r3]);
// h1.nombre = 'Pedro'
// r1.nombre = 'Facebook'
console.log(r1)