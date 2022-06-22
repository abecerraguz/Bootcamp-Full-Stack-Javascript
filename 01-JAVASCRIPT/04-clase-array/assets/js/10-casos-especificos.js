console.log()
console.log('========================RECORRIENDO ARRAY CON DISTINTOS DATOS')
console.log()


/*
    Ejercicio propuesto (1)
    Crear una estructura que contenga distintos tipos de datos, crea una variable del tipo array
    que contenga los siguientes datos: “Perro”, “Gato”, ave: “guacamaya”, 2020, “erizo”, lugar:
    “Chile”, ciudad: “Santiago de Chile”. Luego muestra el resultado en la consola del navegador.

    SOLUCION:
    let datosPersonales = ['Perro','Gato',{ave:'guacamaya'},2020,'erizo',{lugar:'Chile'},{ciudad:'
    Santiago de Chile'}];
*/

/*
    Ejercicio propuesto (2)
    Escribir las coordenadas del array que muestran los valores 1, 13 y 34 de la siguiente matriz:

    var matriz3x3 = [
        ["1","2","3"],
        ["5","8","13"],
        ["21","34","55"],
    ];
    RESPUESTA:
    matriz3x3[0][0];// 1
    matriz3x3[1][2];// 13
    matriz3x3[2][1];// 34
*/



/*
    Ejercicio propuesto (3)
    Para el arreglo que se presenta a continuación, mostrar por la consola del navegador web la
    cantidad de elementos totales que contiene el arreglo. Luego, reduce en un elemento el
    arreglo actual, es decir, que pase de 5 elementos a 4, y por último, añade un nuevo elemento
    en la posición 7 del arreglo denominado: “Express”.

    let datosWeb = ["JavaScript","VueJS","AngularJS","ReactJS","NodeJS"]

    RESPUESTA:
    let datosWeb = ["JavaScript","VueJS","AngularJS","ReactJS","NodeJS"];
    console.log(datosWeb.length);
    datosWeb.length = 4;
    datosWeb[7] = "Express"
*/


/*
    Ejercicio propuesto (4)
    En base al siguiente código, escribe un ciclo que acceda y muestra con un console.log cada
    uno de los elementos dispuestos en el siguiente arreglo mediante el ciclo repetitivo for:

    var mascotas = ['Perros',{nombre: 'Firulais',edad: 5},'Gatos',{nombre:
        'Michi',edad: 2},'Aves',{nombre: 'Pepito',edad: 1},]

    RESPUESTA:
    for (var i = 0; i < mascotas.length; i++) {
        console.log(mascotas[i]);
    };  
*/




/*
    Ejercicio propuesto (5)
    Accede y muestra mediante un console.log cada uno de los elementos dispuestos en el
    siguiente arreglo mediante los ciclos repetitivos for...in y for...of:

    let mascotas = ['Perros',{nombre: 'Firulais',edad: 5},'Gatos',{nombre:
        'Michi',edad: 2},'Aves',{nombre: 'Pepito',edad: 1},]

    RESPUESTA:

    for (let animales in mascotas){
        console.log(animales);
    }

    for (let animal of mascotas){
        console.log(animal);
    };

*/

/*
    Ejercicio propuesto (6)
    Para el objeto dado, realice las siguientes operaciones implementando la notación de punto
    para poder acceder y mostrar los elementos: nombre, edad y peso del alumno. Además el
    nombre y la ciudad del representante. Luego ejecuta y muestra la función que se encuentra
    en el elemento denominado rendimiento. Utiliza el console.log para obtener los resultados
    en el navegador web.

    let alumno = {

        representante: {
            nombre: 'Maria',
            edad: 49,
            lugar: {
                pais: 'Chile',
                ciudad: 'Santiago de Chile'
            }
        },
        nombre: 'Manuel',
        apellido: 'Perez',
        peso: '45kg',
        edad: 10,
        amigable: true,
        rendimiento: function(){
            console.log('Muy buen alumno');
        }
};

    RESPUESTA:
    console.log(alumno.nombre);
    console.log(alumno.edad);
    console.log(alumno.peso);
    console.log(alumno.representante.nombre);
    console.log(alumno.representante.lugar.ciudad);
    console.log(alumno.rendimiento());

*/


/*
    Ejercicio propuesto (7)
    Crear una función que muestre los valores del representante, como nombre y país. Además,
    el nombre y apellido del alumno en un mensaje que indique: “El representante del alumno
    Manuel Pérez es Maria, quien reside en Chile”. La función debe estar en un elemento
    denominado mensaje y utilizando el operador this, trae los valores necesarios a ser
    mostrados en el mensaje final dentro de la función.

    let alumno = {
        representante: {
            nombre: "Maria",
            edad: 49,
            lugar: {
                pais: "Chile",
                ciudad: "Santiago de Chile",
            },
        },
        nombre: "Manuel",
        apellido: "Perez",
        peso: "45kg",
        edad: 10,
        amigable: true,
    };

    RESPUESTA:
    console.log(alumno.mensaje());

*/

/*
    Ejercicio propuesto (8)
    A partir del objeto dado a continuación, crear un objeto con cada uno de los elementos.
    Finalmente, mostrar una tabla en HTML con sus propiedades:

    let alumnos = [

        {
            nombre:'Pedro',
            apellido:'Soto',
            peso:'66Kg',
            altura:'1.80m',
            edad:25
        },
        {
            nombre:'Ana',
            apellido:'Gutierrez',
            peso:'57Kg',
            altura:'1.60m',
            edad:27
        },
        {
            nombre:'Mario',
            apellido:'Torrez',
            peso:'80Kg',
            altura:'1.82m',
            edad:33
        }

    ]

    RESPUESTA:
    let texto ="<tr><th>Nombre</th><th>Apellido</th><th>Peso</th><th>Altura</th><th>Edd</th></tr>";
    for (var i = 0; i < alumnos.length; i++) {
        texto += `<tr>
        <td>${alumnos[i].nombre}</td>
        <td>${alumnos[i].apellido}</td>
        <td>${alumnos[i].peso}</td>
        <td>${alumnos[i].altura}</td>
        <td>${alumnos[i].edad}</td>
        </tr>`;
    }
    document.getElementById("cuerpo-tabla").innerHTML = texto;
*/



/*
    Ejercicio propuesto (9)
    Para el objeto que se mostrará a continuación, obtener un arreglo con las propiedades, otro
    arreglo con los valores de las propiedades y finalmente un arreglo que contenga los arreglos
    de las propiedades y valores del objeto.

    var mascotas = {
        perros: "Pastor Aleman", 
        gatos: 5, 
        aves: "guacamayas"
    };

    var keys = Object.keys(mascotas);
    console.log(keys);
    var values = Object.values(mascotas);
    console.log(values);
    var entries = Object.entries(mascotas);
    console.log(entries);

*/

/*

    Ejercicio propuesto (10)
    Crear un nuevo arreglo partiendo del siguiente mensaje: “06-07-1985” y eliminar los cuatro
    (4) últimos elementos del arreglo formado. Posteriormente, agregar al final del arreglo
    “julio”. Finalmente, mostrar todo el contenido del arreglo implementando el objeto Set y sus
    métodos.

    var fecha = new Set("06-07-1985");
    console.log(fecha);
    fecha.delete("1");
    fecha.delete("9");
    fecha.delete("8");
    fecha.delete("5");

    console.log(fecha);

    fecha.add("j");
    fecha.add("u");
    fecha.add("l");
    fecha.add("i");
    fecha.add("o");

    console.log(fecha);

    fecha.forEach(function(element) {
        console.log(element);
    });

*/













