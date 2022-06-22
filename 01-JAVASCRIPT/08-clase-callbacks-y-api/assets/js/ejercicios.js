/*
EJERCICIO 2

Desarrollar un programa con JavaScript implementando funciones con callback, que
al pasarle los puntos obtenidos en dos ejercicios de un exámen, sume ambos puntos
e indique si hemos superado la prueba. El examen tiene una ponderación total de 10
puntos. Cada ejercicio tiene una nota máxima de 5 puntos.

const notas = (nota1, nota2, callback) => {
    let total = nota1 + nota2;
    callback(total);
};
const evaluando = (total) => {
    if (total > 5) {
        console.log(`El alumno superó la prueba con: ${total} puntos`);
    } else {
        console.log(`El alumno no superó la prueba. Total puntos
alcanzados: ${total}`);
    }
};

notas(3, 1, evaluando);


*/


/*
EJERCICIO 3
Crear la función "separar", donde se pasen dos (2) argumentos, un arreglo de
números y un callback. La función deberá devolver un objeto con dos (2) arreglos,
uno con los pares y otro con los impares. Ejemplo: Si se tiene el arreglo
[3,12,7,1,2,9,18]. La función debe retornar: pares: [12,2,18], impares: [3,7,1,9].


const notas = (arreglo, callback) => callback(arreglo);
const separar = (arreglo) => {
    let par = [];
    let impar = [];
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] % 2 == 0) {
            par.push(arreglo[index]);
        } else {
            impar.push(arreglo[index]);
        }
    }
    return { par, impar };
};
let arreglo = [3, 12, 7, 1, 2, 9, 18];
console.log(notas(arreglo, separar));


*/


/*
EJERCICIO 4

Crear cuatro (4) funciones con las operaciones básicas matemáticas, sumar, restar,
multiplicar y dividir, a las cuales se les debe enviar dos valores, el primer valor
siempre será más grande que el segundo. Este segundo valor, no puede ser 0. Los
valores deben ser devueltos en callbacks.

const opera = (num1, num2, callback) => {
    if (num1 > num2 && num2 != 0) {
        return callback(num1, num2);
    } else {
        return "Los numeros no estan permitidos";
    }
};
const sumar = (num1, num2) => {
    return num1 + num2;
};
const resta = (num1, num2) => {
    return num1 - num2;
};
const multiplica = (num1, num2) => {
    return num1 * num2;
};
const divide = (num1, num2) => {
    return num1 / num2;
};
console.log(opera(3, 0, resta));

*/

/*
EJERCICIO 5
Crear un programa con JavaScript mediante el uso de funciones con Callback y el
método setTimeout, que permita mostrar los datos de un usuario de acuerdo al
nombre o el número de identificación.

function getUserData(id, name, callback) {
    setTimeout(() => {
        let data = {};
        if (id === 2356256 && name == "Juan") {
            data = { id: 2356256, name: "Juan", lastName: "Duran", age: 35 };
        } else if (id === 27564512 && name == "Manuel") {
            data = { id: 27564512, name: "Manuel", lastName: "Perez", age: 31 };
        } else if (id === 17658624 && name == "Jocelyn") {
            data = { id: 17658624, name: "Jocelyn", lastName: "Rodriguez", age: 30 };
        } else if (id === 12345678 && name == "Maria") {
            data = { id: 12345678, name: "Maria", lastName: "Garrido", age: 30 };
        } else {
            data = "El usuario no existe";
        }
        callback(data);
    }, 1000);
}
getUserData(17658624, "Jocelyn", (user) => console.log(user));

*/

/*
EJERCICIO 5 PROMESAS

Crear un programa con JavaScript utilizando promesas que calcule un número
aleatorio entre el “1” y el “100”, pero que muestre el número aleatorio si y sólo si este
número está comprendido entre “20” y “60”, ambos valores incluidos.

const aleatorio = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let numAleatorio = Math.floor(Math.random() * 100);
            resolve(numAleatorio);
        }, 1000);
    });
};
aleatorio().then((resultado) => {
    if (resultado >= 20 && resultado <= 60) {
        console.log(` ${resultado}`);
    } else {
        console.log(`El resultado: ${resultado} no se encuentra entre
los números 20 y 60`);
    }
});


*/


