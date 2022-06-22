/*

    class Usuario {
        constructor(nombre) {
            this.nombre = nombre;
        }
        saludar() {
            console.log("Bienvenido usuario: " + this.nombre);
        }
    }

    class Administrador extends Usuario {
        constructor(nombre) {
            super(nombre);
        }
        saludar() {
            console.log("Panel de Administración - Usuario: " + this.nombre);
        }
    }

    let adminUser = new Administrador ("Juan");
    adminUser.saludar();

    PASO1
    Para realizar un clouser a la propiedad nombre, 
    lo primero que debemos hacer es quitar el "this" a nommbre
    y dejarlos asignado como variable a un "_nombre", este guion 
    abajo indicara que va a quedar como privado.

    let _nombre = nombre

    PASO2
    Creamo nuestra funciones internas que permitan retornar el valor de la variable privada
    Es importante entender que a estos meotodos de les agrega la palabara this para que sean 
    accedidas desde el exterior.

    PASO3

*/

class Usuario {
    
    constructor(nombre) {

        let _nombre = nombre

        this.getNombre = () => _nombre;
        this.setNombre = (nuevo_nombre) => _nombre = nuevo_nombre;
        
    }



    get nombre(){
        return this.getNombre();
    }

    set nombre(nuevo_nombre){
        this.setNombre(nuevo_nombre);
    }

    saludar(){
        console.log("Bienvenido usuario: "+this.nombre);
    }

}

class Administrador extends Usuario {
    constructor(nombre) {
        super(nombre);
    }
    saludar() {
        console.log("Panel de Administración - Usuario: " + this.nombre);
    }
}

let adminUser = new Administrador("Juan");
console.log(adminUser.nombre);
console.log(adminUser._nombre);
adminUser.saludar();
adminUser.nombre = 'Petra';
console.log(adminUser.nombre);
adminUser.saludar();
