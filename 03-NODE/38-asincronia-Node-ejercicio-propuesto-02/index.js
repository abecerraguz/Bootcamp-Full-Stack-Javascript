/**
    Basado en el ejercicio de las promesas que devuelven un número, desarrolla una
    aplicación con dos promesas que devuelvan tu nombre y tu apellido, y usando el
    Promise.all imprime la concatenación del resultado de ambas promesas.
 */

function promesa1() {
    return new Promise((res, rej) => {
        res("Rafael");
    });
}
function promesa2() {
    return new Promise((res, rej) => {
        res("Aghayev");
    });
}
Promise.all([promesa1(), promesa2()]).then((resultado) => {
    let nombre = resultado[0];
    let apellido = resultado[1];
    console.log(`${nombre} ${apellido}`);
});
