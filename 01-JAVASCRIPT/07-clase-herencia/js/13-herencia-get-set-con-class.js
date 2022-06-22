/*
    REFERENCIA 
    -Página 32
*/

class Animal{

    constructor(nombre){
        this._nombre = nombre
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    // constructor(nombre){
    //     this.nombre = nombre
    // }

    // getNombre(){
    //     return this.nombre
    // }

    // setNombre(nuevo_nombre){
    //     this.nombre = nuevo_nombre;
    // }


}

class Herbivoro extends Animal{
    constructor(nombre,tipoComida){
        super(nombre);
        this._tipoComida = tipoComida
    }

    get tipoComida() {
        return this._tipoComida;
    }

    set tipoComida(comidaNueva) {
        this._tipoComida = comidaNueva;
    }
}

class Fitofago extends Herbivoro{

    constructor(nombre,tipoComida,distancia){
        super(nombre,tipoComida)
        this._distancia = distancia
    }

    get distancia(){
        return this._distancia
    }

    set distancia(nueva_distancia){
        this._distancia = nueva_distancia
    }

    infoFitofago() {
        return `${this.nombre} come ${this.tipoComida}, además se mueve ${this._distancia} km diarios`;
    }

}

const conejo = new Fitofago('Pepito','Zanahorias 🥕', '2 metros');

// Metodo 1 Getter y Setter con funcion
// console.log(conejo.setNombre('Juanito')); // Pepito
// console.log('Salida de nombre',conejo.getNombre()); // Pepito


// Metodo 2 Getter y Setter con palabra reservada get set
console.log( conejo.nombre = 'Juanito' ); // set cambiamos el nombre
console.log( 'Salida de nombre', conejo.nombre ); // get Juanito


console.log(conejo.tipoComida); // Zanahorias 🥕
console.log(conejo.distancia); // 2 metros
console.log(conejo.infoFitofago()); // Pepito come Zanahorias 🥕 además salta 2 metros
console.log(conejo)


console.log('==================================================')
const conejo2 = new Herbivoro('Roger', 'Lechuga 🥬');
console.log(conejo2.nombre);
console.log(conejo2.tipoComida);
console.log(conejo2.distancia);
conejo2.nombre = "PomPom";
console.log(conejo2.nombre);
conejo2.tipoComida = "Maní 🥜"
console.log(conejo2.tipoComida);