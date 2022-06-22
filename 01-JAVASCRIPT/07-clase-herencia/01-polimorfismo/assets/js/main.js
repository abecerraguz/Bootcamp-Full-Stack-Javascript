let optionSelecet = document.querySelector('#seleccion')
let bloque = document.querySelector('.alert')
let resultado = document.querySelector('#resultado')
bloque.style.display = 'none'



class Pelicula {
    constructor(name){
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

class Largometraje extends Pelicula {
        constructor(name, runTime) {
            super(name);
            this._runTime = runTime;
        }
        getRuntime() {
            return this._runTime;
        }
        setRuntime(runTime) {
            this._runTime = runTime;
        }
}

class Cortometraje extends Pelicula {
    constructor(name, runTime) {
        super(name);
        this._runTime = runTime;
    }
    getRuntime() {
        return this._runTime;
    }
    setRuntime(runTime) {
        this._runTime = runTime;
    }
}

class MyApp {
    play(Pelicula) {
        const result = `la película ${Pelicula.getName()} se está reproduciendo...tiene una duración de ${Pelicula.getRuntime()}`;
        return result;
    }
}

const myApp = new MyApp();


// console.log(playing);

// console.log('===================================')
// const playing2 = myApp1.play(cortometraje);
// console.log(playing2);


optionSelecet.addEventListener('change',function(e){
    e.preventDefault()

    if(this.value == 'cortometraje'){
        const cortometraje = new Cortometraje('Hulk vs Wolverine', '20min');
        const playing = myApp.play(cortometraje);
        bloque.style.display = 'block'
        resultado.innerHTML = playing
    }

    if(this.value == 'largometraje'){
        const largometraje = new Largometraje('Sin City', '105min');
        const playing = myApp.play(largometraje);
        bloque.style.display = 'block'
        resultado.innerHTML = playing
    }



    console.log('Salida',this.value)

})