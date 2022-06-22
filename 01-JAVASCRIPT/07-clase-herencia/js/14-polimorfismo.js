/*

    Implementar una aplicaci n que muestre pel culas y series bajo demanda, llamada “MyApp”.
    Por consiguiente, partiremos con un modelo de herencia simple, como se muestra en la
    imagen n mero 2. En el modelo, en primer lugar tendremos una clase denominada
    “Pel cula”, la cual, define el nombre de las pel culas, de esta clase heredar n las clases
    “Largometrajes” y “Cortometrajes”, cada una de estas tienen como atributo los tiempos de
    duraci n de cada una (“runtime”), siendo un m todo que permite obtener o modificar el
    valor, mediante “get” y “set”.
    Adem s, tendremos una clase llamada “MyApp”, la cual ser  la clase donde se ejecuta un
    m todo “play” (reproducir la pel cula), este m todo “play” recibir  como par metro una
    instancia de la clase pel cula, en otras palabras, puede recibir un Largometraje, Cortometraje
    o una pel cula en s . Por lo tanto, esta clase no tendr  constructor alguno y solo el m todo
    directo “play” que retorna una cadena de texto o string con el mensaje: la pel cula “nombre
    de la pel cula” se est  reproduciendo...tiene una duraci n de “tiempo de la pel cula”.

*/

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

const largometraje = new Largometraje('Sin City', '105min');
const cortometraje = new Cortometraje('Hulk vs Wolverine', '20min');

const myApp1 = new MyApp();

const playing = myApp1.play(largometraje);
console.log(playing);

console.log('===================================')
const playing2 = myApp1.play(cortometraje);
console.log(playing2);
