/*
Veamos el siguiente ejemplo, donde creamos un objeto con una propiedad y un método,
luego crearemos un nuevo objeto, al cual le asignaremos como objeto padre el primer objeto
creado, esto se lograr  mediante el método Object.create(), quien crea un objeto nuevo
utilizando un objeto existente como el prototipo del nuevo objeto creado, luego
mostraremos por consola ambos objetos para ver el prototipo de cada uno.

*/

var persona_uno = {
    nombre: "Juan",
    saludar: function(){
        console.log("Hola, soy "+this.nombre);
    }
}

console.log('Salida persona 1',persona_uno);

var persona_dos = Object.create(persona_uno);
console.log('Salida persona 2', persona_dos);