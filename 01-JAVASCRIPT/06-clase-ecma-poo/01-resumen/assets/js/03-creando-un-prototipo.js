function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    console.log('Desde mi nuevo proto')
}

const pedro = new Cliente('Pedro',6000)

// Podemos llamar a la funcion desde el Prototype
pedro.tipoCliente()

console.log('Salida pedro--->',pedro)

/*
    Ahora bien si copiamos el objeto Empresa
    del ejercicio anterior y hacemos un console.log
    Lo pegamos a continuación
*/

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

// Instanciamos una empresa
const nike = new Empresa('Nike',10000, 'Deporte')
console.log('Salida nike--->', nike)

/*
    Que logramos, logramos hacer que cada metodo o función 
    sea exclusiva a cada objeto. Por lo tanto
    la Instancia de Empresa no pueden tocar las de clientes.

    El prototype utiliza function y no Arrow Function. 

    function()----> busca información en el contexto y eso pasa por que saca informacion con el this.
    ()=> ------> Arrow function busca la información en el objeto global.

    El proto hace referencia al objeto actual a traves de this.

    Podemos ampliar nuestra funcion tipoCliente()

    Cliente.prototype.tipoCliente = function(){

        let tipo;

        if(this.saldo > 10000){
            tipo = 'GOLD'
        }else if(this.saldo > 5000){
            tipo = 'PLATINUM'
        }else{
            tipo = 'NORMAL'
        }

        return tipo
        
    }

    Cliente.prototype.nombreClienteSaldo = function()  {
        // Es importante entender que el prototipo matiene la referencia de las propiedades del objeto y sus funciones
        return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `;
    }

    Cliente.prototype.retiraSaldo = function(retiro)  {
        this.saldo -= retiro;
    }


    // Instanciarlo
    const pedro = new Cliente('Pedro', 6000);


    // Acceder a los prototypes
    console.log ( pedro.tipoCliente() );

    // Un prototype que accede a otros prototypes
    console.log ( pedro.nombreClienteSaldo() );

    // reescribir un valor
    pedro.retiraSaldo(2000);

    // comprobar saldo
    console.log ( pedro.nombreClienteSaldo());

    

*/



