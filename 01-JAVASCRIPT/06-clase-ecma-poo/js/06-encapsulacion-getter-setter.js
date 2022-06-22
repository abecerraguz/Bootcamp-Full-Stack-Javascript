/*
Ejercicio guiado: Getters y Setters
Generar un programa que permita crear un objeto para un vehículo con la propiedad de
marca, luego se debe mostrar la marca y, posteriormente, modificarla mediante el uso de los
getters y setters.
*/

function Vehiculo(marca){

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

Vehiculo.prototype.getMarca = function(){
    return this._getMarca;
};

Vehiculo.prototype.setMarca = function(marca){
    this._setMarca = marca;
};

var v1 = new Vehiculo("Ford");
console.log(v1.getMarca()); // "Ford"

v1.setMarca("Kia");
console.log(v1.getMarca()); // "Kia"
console.log('Salida de v1',v1)


/*

    A partir del siguiente código, crea un método getter y uno setter para las propiedades de
    número y pinta, que permitan visualizar y modificar cada uno de ellos.

*/


function Carta(numero, pinta){
    
    var _numero = numero;
    var _pinta = pinta;

    Object.defineProperty(this,"_nombre", {
        get: function(){
             return _nombre;
        },
        set: function(nuevoNombre){
            _nombre = nuevoNombre;
        }
    });


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
};

Carta.prototype.setNumero = function(numero){
    this._setNumero = numero;
};

Carta.prototype.getPinta = function(){
    return this._getPinta;
};

Carta.prototype.setPinta = function(pinta){
    this._setPinta = pinta;
};




var cartas = new Carta(1,'rojo');

cartas.setNumero(34)
cartas.setPinta('Corazones')
console.log(cartas.getNumero(), cartas.getPinta());
// console.log(cartas.setNumero(25), cartas.setPinta('Espada'));




