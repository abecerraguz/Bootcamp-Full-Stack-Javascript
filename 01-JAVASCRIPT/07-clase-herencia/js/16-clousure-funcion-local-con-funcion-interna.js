console.log('============ CLOUSURE CON FUNCION LOCAL Y CON FUNCION INTERNA ================')
//
// function local() {
//     let a = 2;
//     function interna () {
//         console.log(a);
//     }
//         console.log(a);
//     interna();
// }
// local();



// const local = () => {
//     const a = 2;
//     console.log(a);
// }

// local();
// console.log(a);

// // 2
// // Uncaught ReferenceError: a is not defined

function crearFuncion() {
    var texto = "Variable dentro de funcion";
    function closure() {
        console.log(texto );
    }
    return closure;
}
var miFuncion = crearFuncion();
miFuncion();

// const crearFunction = () => {
//     let texto = "Variable dentro de funcion";
//     let clousure = () => console.log(texto);
//     return clousure()
// }

