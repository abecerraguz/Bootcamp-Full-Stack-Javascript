/**
    Ejercicio propuesto (1)
    Partiendo del arreglo mostrado a continuación y usando el método push, agrega los
    siguientes objetos al arreglo: {raza: "Pastor Aleman", color: "marron y negro" },{raza: "Beagle",
    color: "blanco, marrón y negro" },{raza: "Afgano", color: "negro" }.

    let perros = [{raza: "Yorkshire Terrier", color: "marrón, negro y gris"
    },{raza: "Shar Pei", color: "marrón" },{raza: "Schnauzer gigante",
    color: "negro" }];

    CONCEPTO:
    El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

    SOLUCION:
    let perros = [
        { raza: "Yorkshire Terrier", color: "marrón, negro y gris" },
        { raza: "Shar Pei", color: "marrón" },
        { raza: "Schnauzer gigante", color: "negro" },
    ];
    perros.push({ raza: "Pastor Aleman", color: "marron y negro" }, { raza: "Beagle", color: "blanco, marrón y negro" }, { auto: "Afgano", color: "negro" });
    console.log(perros);


 */

/**
    Ejercicio propuesto (2)
    En base al arreglo presentado a continuación, elimina el último elemento del array llamado
    “El prisionero de azkaban”.

    let librosJJK = ["La comunidad del anillo", "Las dos torres","El regreso del rey", "El prisionero de azkaban"];
    CONCEPTO:
    El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

    SOLUCION:
    let librosJJK = ["La comunidad del anillo", "Las dos torres","El regreso del rey", "El prisionero de azkaban"];
    librosJJK.pop();
    console.log(librosJJK);
 */

/**
    Ejercicio propuesto (3)
    Escribe un array de cuatro (4) objetos con los siguientes datos: 
    {cuerda: "Guitarra", cantidad:7 },{viento: "Flauta", cantidad: 20 },{cuerda: "Violín", cantidad: 5 }, luego, quítale el primer
    elemento utilizando el método shift.
    
    CONCEPTO
    El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

    SOLUCION:
    let instrumentos = [
        { cuerda: "Guitarra", cantidad: 7 },
        { viento: "Flauta", cantidad: 20 },
        { cuerda: "Violín", cantidad: 5 },
    ];
    instrumentos.shift();
    console.log(instrumentos);
 */

/**
    Ejercicio propuesto (4)
    ¿Cuál es la cadena de texto que al pasar por el método split da como resultado este array
    ["mesa","silla","comedor"]? No puedes usar ',' para conectar la cadena de texto, valida
    con el método split.

    CONCEPTO
    El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
    El método split() devuelve el nuevo array.

    let mensaje = 'Soy un tipo feliz y afortunado';
    console.log(mensaje.split()); // regresa ["Soy un tipo feliz y afortunado"]

    let mensaje = 'Soy un tipo feliz y afortunado';
    console.log(mensaje.split(',')); // ["Soy un tipo feliz y afortunado"]

    let mensaje = 'Soy un tipo feliz y afortunado';
    console.log(mensaje.split(' ')); // ["Soy", "un", "tipo", "feliz", "y", "afortunado"]

    // Regresa como resultado un arreglo vacío
    ''.split(''); // regresa []

    // Regresa como resultado un arreglo con un 'string' vacío
    ''.split() // regresa [""]
    

    SOLUCION:
    var filtros = 'mesa silla comedor';
    var filtros = filtros.split(' ');
    console.log(filtros)// ["mesa","silla","comedor"];

 */

/**
    Ejercicio propuesto (5)
    Estás consumiendo una interfaz de información que devuelve un listado de pokemones:
    ["pikachu","ditto","bulbasaur"], pero los propietarios de la página web donde estas
    realizando el trabajo necesitan que el despliegue de la información sea en el título de la página web, por lo que necesitas transformar en texto para que quede separado por guiones
    (-) implementado el método join.

    CONCEPTO
    El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

    const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // expected output: "Fire,Air,Water"

    console.log(elements.join(''));
    // expected output: "FireAirWater"

    console.log(elements.join('-'));
    // expected output: "Fire-Air-Water"
    
    SOLUCION:
    var pokemons = ["pikachu","ditto","bulbasaur"];
    console.log(pokemons.join(" - "));
*/

/*
    Ejercicio propuesto (6)
    Utilizando el método map, crea un nuevo arreglo con el cuadrado de cada elemento del
    arreglo original. Puedes utilizar el método Math.pow().
    var numeros = [1,2,3,5,8,13,21];

    SOLUCION
    let numeros = [1, 2, 3, 5, 8, 13, 21];
    let numeros_nuevo = numeros.map(function (num) {
        return Math.pow(num, 2);
    });
    console.log(numeros_nuevo);
*/

/*
CONCEPTO
arreglo.reduce(callback(acumulador, valorActual[, índice[, array]])[,
valorInicial])

EJEMPLO
['H','o','l','a'].reduce(function(valorAnterior, valorActual, indice, vector){
    console.log(valorAnterior, valorActual, indice, vector)
    return valorAnterior + valorActual;
});

// Primera llamada
valorAnterior = H, valorActual = o, indice = 1
// Segunda llamada
valorAnterior = Ho, valorActual = l, indice = 2
// Tercera llamada
valorAnterior = Hol, valorActual = a, indice = 3
// Valor Devuelto: “Hola”

Ejercicio propuesto (7)
Obtener el promedio de notas del siguiente arreglo = [6,7,7,5,4] utilizando el método reduce.

SOLUCION:

var notas = [6, 7, 7, 5, 4];
var sumaNotas = notas.reduce(function(acumulador, nota){
    return (acumulador + nota);
},0);
var promedio = (sumaNotas / notas.length);
console.log(promedio)

*/

/*
    Ejercicio propuesto (8)
    Del siguiente arreglo obtenga los pokemones con experiencia (level) mayor a 30.

    var pokemones = [
        {nombre: 'Pikachu', level: 28},
        {nombre: 'Charmander', level: 22},
        {nombre: 'Dito', level: 37},
    ];

    CONCEPTO
    El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]


    SOLUCION:
    var level = pokemones.filter(function(experiencia){
        return experiencia.level > 30;
    });
    console.log(level);

*/

/*
    Ejercicio propuesto (9)
    Escribir el código para obtener este arreglo final usando el método concat 

    var resultado = ["perro","gato","ratón","iguana"] en base a los siguientes arreglos:

    var animalesA = ["perro","gato"];
    var animalesB = ["ratón","iguana"];

    SOLUCION:
    var animalesA = ["perro","gato"];
    var animalesB = ["ratón","iguana"];
    var animales = animalesA.concat(animalesB);
    console.log(animales);

*/

/*
    Ejercicio propuesto (10)
    ¿Cuál es el resultado de aplicar sort al siguiente array?

    var lista =["Pepe",5,2,"Diego","1"]

    SOLUCION:
    var lista = ["Pepe",5,2,"Diego","1"];
    console.log(lista.sort()); // Array(5) [ "1", 2, 5, "Diego", "Pepe" ]
*/

/*
    Ejercicio propuesto (11)
    Sin probar el código. ¿Cuál es el resultado de esta operación?

    ["perro", "gato", "ratón"].reverse()

    SOLUCION:
    Array(3) [ "ratón", "gato", "perro" ]

*/

/*
    Ejercicio propuesto (12)
    Para el arreglo mostrado a continuación, invierte e itera con un forEach los elementos
    dispuesto en el arreglo. Luego muestra el resultado final por medio de un console.log.
    var nombres = ['Juan','Manuel','Elio','Ali','Yecelis','Yecenia','Laura'];

    CONCEPTO
    El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

    SOLUCION:
    var nombres = ['Juan','Manuel','Elio','Ali','Yecelis','Yecenia','Laura'];
    nombres.reverse();
    nombres.forEach(function(nombre) {
        console.log(nombre);
    });
*/


/*
    Ejercicio propuesto (13)
    Del siguiente arreglo de objetos, busque el pokemon con el nombre Pikachu y muestre el
    resultado.

    var pokemones = [
        {nombre: 'Charmander', level: 22},
        {nombre: 'Pikachu', level: 28},
        {nombre: 'Dito', level: 37},
    ];

    CONCEPTO
    El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

    SOLUCION:
    var pokemones = [
        {nombre: 'Charmander', level: 22},
        {nombre: 'Pikachu', level: 28},
        {nombre: 'Dito', level: 37},
    ];
    var pikachu = pokemones.find(function(pokemon){
        return pokemon.nombre == 'Pikachu';
    });
    console.log(pikachu);

*/

/*
    Ejercicio propuesto (14)
    Para el siguiente arreglo denominado experiencias, muestra la posición (índice) que
    contenga la experiencia mayor o igual a 5 años.

    CONCEPTO
    El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

    const array1 = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => {
        element > 13;
    }

    console.log(array1.findIndex(isLargeNumber));
    // expected output: 3

    var experiencias = [
        {
            titulo: "Practica",
            anos: 1,
        },
        {
            titulo: "Programador Junior",
            anos: 2,
        },
        {
            titulo: "Programador Senior",
            anos: 4,
        },
        {
            titulo: "Jefe de proyecto",
            anos: 5,
        },
    ];

    SOLCUION:
    var expeIndice = experiencias.findIndex(function(persona){
        return persona.anos >= 5;
    });
    console.log(expeIndice);

*/


/*
    Ejercicio propuesto (15)
    ¿Existe en el listado algún pokémon tipo agua?. Implementa el método some para verificar la
    condición indicada, retornando true o false.

    CONCEPTO
    El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

    Nota: Este método devuelve false para cualquier condición puesta en un array vacío.

    

    var pokemones = [
        { nombre: "Charmander", tipo: "Fuego" },
        { nombre: "Pikachu", tipo: "Electricidad" },
        { nombre: "Dito", tipo: "normal" },
    ];

    var tipoAgua = pokemones.some(function(tipo){
        return tipo.tipo == "agua"
    });
    console.log(tipoAgua);

*/