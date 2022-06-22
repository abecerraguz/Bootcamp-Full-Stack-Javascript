class Personal{
    constructor(nombre,departamento,tipo,activo) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.tipo = tipo;
        this.activo = activo;
    }
}

class Administrativo extends Personal{
    constructor(nombre,departamento,tipo,activo){
        super(nombre,departamento,tipo,activo);
    }
}
class Docente extends Personal{
    constructor(nombre,departamento,tipo,activo){
        super(nombre,departamento,tipo,activo);
    }
}
class Obrero extends Personal{

    /*
        Si quitamos el constructor de la sub clase igual funciona 
        dado que hereda sus propiedades de extens Personal
    */

    // constructor(nombre,departamento,tipo,activo){
    //     super(nombre,departamento,tipo,activo);
    // }
    
}

let admin1 = new Administrativo('Jocelyn','Contenido', 'Fijo', true);
let docente1 = new Docente('Juan','FrontEnd', 'Contratado', true);
let obrero1 = new Obrero('Manuel','Electricidad','Fijo',true);
console.log(admin1);
console.log(docente1);
console.log(obrero1);

