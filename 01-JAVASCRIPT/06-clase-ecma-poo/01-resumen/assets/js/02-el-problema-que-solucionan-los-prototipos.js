function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 400);

/*
    Por ejemplo si necesitamos una funcion
    que entregue el saldo del cliente
*/

function formatearSaldo(cliente){
    // Podemos desestructurar el parametro
    const {nombre,saldo} = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

// Mostramos la funcion por consola
console.log( 'Salida de formatearCliente--->', formatearSaldo(juan));


/*

    Supongamos que nuestro proyecto va creciendo más
    y ya sólo no vamos a tener "Clientes" y ahora vamos
    a tener "Empresas".

    Entonces el codigo del contructor de Cliente 
    es similar.

*/

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

// Instanciamos una empresa
const nike = new Empresa('Nike',10000, 'Deporte')
// Mostramos la funcion por consola
console.log( 'Salida de formatearCliente con empresa--->', formatearEmpresa(nike));

/*
    Podemos observar que tenemos la función "formatearSaldo"
    esta la podemos usar para empresa y funciona pero si se dan cuenta empresa tiene 
    categoria, entonces lo que podemos hacer es hacer la función "formatearEmpresa()"

    Si se dan cuenta funciona pero ya debemos hacer muchos ajustes. Y además en un proyecto
    asi donde pueden participar muchas personas se puede perder y no saber que funcion pertenece
    a Empresas o a Clientes se podría documentar pero en general se puede transformar cahotico.

    Eso es lo que soluciona el prototipo dado que podemos agregar funciones al "Prototype"
    de cada Objetos y además saber que metodo pertenece a cada objeto.

*/

function formatearEmpresa(empresa){
    const {nombre,saldo,categoria} = empresa
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}
