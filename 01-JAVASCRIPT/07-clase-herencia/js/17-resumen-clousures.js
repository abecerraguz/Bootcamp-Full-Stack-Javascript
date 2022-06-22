

/*
    El concepto de clousure tiene que ver con el alcance de la variable o scope,
    en este caso la variable a esta con un alcance global,
    al parecer no habría problema en ejecutar la función local() dado que el log 
    de a es gloabla o sea el alcance es gloabl.

    Si dejamos dentro de la funcion local el valor de "a" tambien 
    se mostraria por consola el valor de a que es 1.

    //GLOBAL

    const a = 1

    const local = () =>{
        console.log(a)
    }

    local()

    //LOCAL CON FUNCION INTERNA ( DESDE A FUERA NO PODEMOS ACCEDER A UNA VARIABLE INTERNA )
    const local = () =>{
        const interna = ()=>{
            const a = 1 
        }

        interna()
        console.log(a)
    }

    local()


    // CLOUSURES y FUNCION CON RETURN Y SALIDA DE UN OBJETO
    Por el concepto de Clousure b no va a llegar y no esta 
    en su alcance del scope

    const operaciones = (sum1,sum2) => {
        const b = 23
        return {
            suma:()=>sum1+sum2
        }
    }
    const b = operaciones(1,3).b
    console.log(b)


    // CLOUSURE Y CLASES DE ECMA6

    Implementar la técnica de clousure,
    para proteger la propiedad del objeto padre
    convirtiendola a privada.

    class Usuario {
    
    constructor(nombre) {
        // this.nombre = nombre;
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
adminUser.saludar()



*/








