let formulario = document.getElementById('form');
let resultado = document.getElementById('resultado')

let evalue = (event) =>{
    event.preventDefault();
    console.log('Form Funcionando')
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let duracion = document.getElementById('duracion').value;
    let varios = document.getElementById('varios').value;
    let tipo = document.getElementById('tipo').value;

    if(tipo == 'proyecto'){

        let proyecto = new Quiz(nombre,apellido,duracion,tipo,varios)
        resultado.innerHTML = `${ proyecto.mostraPrueba()}`
    }

}


formulario.addEventListener('submit', evalue)

class Plataforma{
    constructor(nombre,apellido,duracion,tipo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.duracion = duracion;
        this.tipo = tipo;
    }

    mostrarDatos(){
        return (`El dato del participante es ${this.nombre} y su apellido es ${this.apellido}`)
    }
}

class Quiz extends Plataforma{
    constructor(nombre,apellido,duracion,tipo,n_pregunta){
        super(nombre,apellido,duracion,tipo)
        this._n_pregunta = n_pregunta
    }
    get n_pregunta(){
        return this._n_pregunta
    }

    mostraPrueba(){
        return (`Los datos de la prueba son tipo ${this.tipo} y la duracion es ${this.duracion} y con ${this._n_pregunta}`)
    }

}

class Desafio extends Plataforma {
    constructor(nombre,apellido,duracion,tipo, n_requerimiento){
        super(nombre,apellido,duracion,tipo)
        this.n_requerimiento = n_requerimiento
    }

    get n_requerimiento(){
        return this._n_requerimiento
    }

    mostraPrueba(){
        return (`Los datos de la prueba son del tipo ${this.tipo}, con una duracion de ${this.duracion} y con ${this._n_requerimiento}`)
    }

}


class Proyecto extends Plataforma{
    constructor(nombre,apellido,duracion,tipo,n_temas){
       super(nombre,apellido,duracion,tipo)
       this._n_temas = n_temas
    }

    get n_temas(){
        return this._n_temas
    }

    mostrarPrueba(){
        return (`Los datos de la prueba son del tipo ${this.tipo}, con una duracion de ${this.duracion} y con ${this._n_temas}`)
    }
}
