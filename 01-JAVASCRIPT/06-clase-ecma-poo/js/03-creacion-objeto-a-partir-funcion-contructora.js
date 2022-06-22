/* 

    CREANDO OBJETOS A PARTIR 
    DE UNA FUNCION CONTRUCTORA O TAMBIEN LLAMADO MOLDE
    
    Por convención una funcion contructora se escribe su nombre
    en mayuscula
    
    Ejemplo: Vamos a crea la funcion contructora Estudiante

*/

function Estudiante(nombre){
    this.nombre = nombre
}

let x1 = new Estudiante('Carla')
console.log(x1)

/*
    Una ves instanciada la funcion contructora 
    podemos crear tanto propiedades como metodos
    Ejemplo:
*/
x1.saludar = function(){
    console.log(`Hola Soy ${this.nombre}`)
}

x1.saludar();

var persona = new Object();
persona.nombre = "Camila";
persona.saludar = function(){
console.log("Hola soy " + this.nombre);
}
persona.saludar();


function Persona(nombre){
    this.nombre = nombre
}

let persona1 = new Persona('Camila')
console.log('Persona 1--->', persona1)
persona1.saludar = function(){
    console.log(`Hola Soy ${this.nombre}`)
}

persona1.saludar();

const humano = {
    nombre : 'Juan',
    saludar: function(){
        console.log(`Hola soy ${this.nombre}`)
    }
}

console.log(humano)
