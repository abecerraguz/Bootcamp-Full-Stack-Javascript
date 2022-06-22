var pruebaVar = () => {
    var num = 31;
    if (true) {
        var num = 71;
        console.log(num); // 71
    }
    console.log(num); // 71
};

let pruebaLet = () => {
    let num = 31;
    if (true) {
        let num = 71;
        console.log(num); // 71
    }
    console.log(num); // 31
};

const pruebaConst = () => {
    const num = 31;
    if (true) {
        const num = 71;
        console.log(num); // 71
    }
    console.log(num); // 31
}

pruebaVar();
pruebaLet();
pruebaConst();

/*

    En el resultado anterior, se puede apreciar como al declarar la variable con var, toma
    automáticamente el último valor asignado, mientras que con let y const, la variable solo es
    valida en su contexto y no cambia de valor así se esté asignando nuevamente la misma
    variable pero con otro valor.

    Ejercicio propuesto (2)
    Para el siguiente código, ¿Cuál será el valor de las variables mostradas en la consola del
    navegador web? Explica tu respuesta.

    var x = 4;
    if (true) {
        var x = 7;
    }
    console.log(x);
    for (var i = 0; i < 4; i++) {
        let j = 10;
    }
    console.log(i);
    console.log(j);

*/