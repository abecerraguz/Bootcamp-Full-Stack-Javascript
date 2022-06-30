
function promesa1() {
    return new Promise((res, rej) => {
        res(1);
    });
}

function promesa2() {
    return new Promise((res, rej) => {
        res(2);
    });
}

Promise.all([promesa1(), promesa2()]).then((resultado) => {

    console.log("Resultado de las promesas: ", resultado);

    let suma = resultado.reduce((total, num) => total + num);

    console.log("La suma de ambos resultados es: " + suma);
});
