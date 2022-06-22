
/*

    Aduana de Chile , necesita crear un programa que registre el ingreso de 
    las distintas empresas que realizan importaciones y estas deben ser 
    clasificadas por id de registro, nombre, rut. 

    Además desea saber el total de importaciones de la empresa. 

    Por otro lado también necesita dejar registro de las importaciones 
    de cada empresa estas deben ser registradas
    por id de registro, producto, numero de productos y precio unitario.
     
    Además desea saber el valor total de las importaciones.

*/

// SOLUCION OBJETO LITERAL

var IngresoEmpresas = {

    registroId:0,
    nombre:'"Todo Vinilo"',
    rut:'12.443.791-k',
    giro:'Musica',

    importaciones : [
       
        {
            registroId:1,
            producto:'Tornamesas',
            numeroProducto: 500,
            precioUnitario : 100,
            sumValorImport: function ( productos, precio ) { 
                return productos * precio
            }
        },

        {

            registroId:2,
            producto:'Vinilos',
            numeroProducto: 500,
            precioUnitario : 50,
            sumValorImport: function (productos, precio) { 
                return productos * precio
            }
        
        }  
    ],
    sumTotalImportaciones: function () { 
        return this.importaciones[0].numeroProducto  +  this.importaciones[1].numeroProducto 
    }
    
}

console.log('Nombre de la Empresa', IngresoEmpresas.nombre)
var nomImport = IngresoEmpresas.importaciones;

    nomImport.forEach(function(element,index){

            console.log('Nombre de la importación número ' + element.registroId + ' es'+' "'+ element.producto + '"' + ' se han importado ' + element.numeroProducto + ' productos ' + 'su valor unitario es ' +  element.precioUnitario + ' el total de la importación es ' + element.sumValorImport(element.numeroProducto,element.precioUnitario) )

    })


console.log('Número Total de importaciones de la empresa,', IngresoEmpresas.sumTotalImportaciones() + ' productos')


