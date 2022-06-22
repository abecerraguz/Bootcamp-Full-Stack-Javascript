function Comuna(nombre,poblacion){
    this.nombre = nombre;
    this.poblacion = poblacion;
};

Comuna.prototype.calcularCenso = function() {
    console.log('Calculando el censo del sector...');
};

/*
    Paso 3: El objeto hijo “Sector”, realiza el llamado a las propiedades del objeto padre,
    por lo que hace falta indicarle a ambos objetos que uno es extensi n de otro, esto lo
    lograremos mediante la instrucci n “Object.create”, asignando al prototipo del
    objeto hijo “Sector” como nuevo objeto el prototipo del objeto padre. Adem s,
    anularemos el constructor para que apunte a la funci n Sector; de lo contrario,
    usar a la propiedad del constructor en Comuna.
*/

function Sector(nombre,poblacion,direccion) {
    Comuna.call(this, nombre,poblacion);
    this.direccion = direccion;
};

Sector.prototype = Object.create(Comuna.prototype);
// Sector.prototype.constructor = Sector;

// instancia del objeto
var centro = new Sector('Santiago', 3000000, 'Rebeca Matte 18');
// llamada a m todo y propiedades
console.log(centro);
console.log(centro.nombre);
console.log(centro.poblacion);
console.log(centro.direccion);
centro.calcularCenso();

// Santiago
// 3000000
// Rebeca Matte 18
// Calculando el censo del sector...
