// EJERCICIO GUIADO DE CLUOSURE
/*
    Utilizar dos funciones, una dentro de otra para observar el comportamiento de la
    variable dentro y fuera de ambas funciones.
    Utilizar variables pero dentro de la funci n y observar c mo reacciona el c digo.
*/

// PASO1
/*
    Inicializa una variable con el nombre de “a” y el valor numero de “1”, luego
    crea una funci n con el nombre de “global”.
*/
console.log('============EJERCICIO CON VARIABLES GLOBAL================')

    var a = 1
    function global(){
        console.log(a);
        function interno(){
            console.log(a);
        }
        interno();
    }

    global();
    console.log(a)

// 1
// 1
// 1
