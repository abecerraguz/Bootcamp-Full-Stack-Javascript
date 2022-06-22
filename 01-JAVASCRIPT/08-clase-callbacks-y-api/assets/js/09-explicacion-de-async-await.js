/*
    Simulamos la conecccion a una API,
    a través de un setTimeOut(). 
    El Async son una alternativa a new Promise(),
    Pero funcionan sobre new Promise().



*/

const descargarClinetes = ()=>{

    return new Promise((resolve,reject)=>{

        const error = false

        setTimeout(() => {

            if(!error){
                resolve('El listado de Clinetes se descargo correctamente')
            }else{
                reject('Error en la conexíon')
            }

        }, 3000);
    })
}

/*
    Vamos a crear una funcion Asyc

*/

const ejecutar = async ()=>{
    /*
        Vampos a usar un try catch
        El try catch me permite que javaScript
        si ejecuta un error el codigo no se detenga 
        y continue 
    */
   try {
        /* 
            En el try ejecutamos nuestra funcion descargarClientes(),
            si recordamos anteriormente el manejo de la ejecucion de la
            funcion lo haciamos con .then() y catch().

            En el caso de Async Await esto se hace con asignar una variable a la
            fuucion.

            Ahora para trabajar con una funcion asicronica que contenga un await 
            la funcion debe tener un async la funcion padre y la funcion  descargarClientes 
            un await.

            QUE HACE AWAIT
            Espera a que se ejecute descargarClinetes javascript por lo que detiene cualquier linea 
            despues del await.

            Como ejecutamos el catch este lo controlamos 
            en la linea 15 le indicamos un true o sea activamos
            el reject al activarse el reject se activa atomaticamente
            el catch.

        */
        console.log(1+1)
        const respuesta = await descargarClinetes()
        // no se ejecuta hasta que no se ejecute el await 
        console.log(2+2)
        console.log(respuesta)
   } catch (error) {
       
   }
}
ejecutar()

