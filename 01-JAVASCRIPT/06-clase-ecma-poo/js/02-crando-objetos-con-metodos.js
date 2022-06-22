/* 

    CREANDO OBJETOS CON METODOS
    Estos son objetos dode sus atributos son una funcion 
    ( Esta funcion es definida como un metodo o sea 
    al crear un metodo en un objeto estamos creando una funcion ) 
    
    Ejemplo:

*/

let vaca = new Object();

vaca.sonido = function (){
    console.log('Moooo')
}

// Para ejecutar el metodo sonido
vaca.sonido()

/* 

    METODO 
    Que hace referencia a una propiedad a través del 
    operador this

*/

let persona = new Object();
persona.nombre = 'Marcela'

persona.saludar = function(){
    console.log(`Hola soy ${this.nombre}`)
}

console.log(persona)
