var persona = { nombre: "José" };
var direccion = { calle: "Avenida Santiago 123", comuna: "Santiago" };

//ES5
var mensaje = "Hola " + persona.nombre + ", tu dirección es " + direccion.calle + ", " + direccion.comuna; 

var persona = { nombre: "José" };
var direccion = { calle: "Avenida Santiago 123", comuna: "Santiago" };

//ES6
var mensaje = `Hola ${persona.nombre}, tu dirección es ${direccion.calle}, ${direccion.comuna}`;
