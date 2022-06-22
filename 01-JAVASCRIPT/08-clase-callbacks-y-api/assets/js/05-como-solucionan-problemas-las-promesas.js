const empleados = [

    {
        id:1,
        nombre:'Fernando'
    },
    {
        id:2,
        nombre:'Sandra'
    },
    {
        id:3,
        nombre:'Karen'
    }

]

const salarios = [

    {
       id:1,
       salario:1000 
    },
    {
        id:2,
        salario:1500
    }

]

const getEmpleado = ( id )=>{
    return new Promise(( resolve, reject ) => {
        const empleado = empleados.find(  e => e.id === id )?.nombre

        // ( empleado )
        //       ? resolve( empleado )
        //       : reject( `No existe empleado con id ${id}` )

        if(empleado){
            resolve( empleado )
        }else{
            reject( `No existe empleado con id ${id}` )
        }

    })
}

const getSalario = (id) =>{

    return new Promise(( resolve, reject)=>{

        const salario = salarios.find( s => s.id === id )?.salario

        if(salario){
            resolve( salario )
        }else{
            reject( `No existe empleado con id ${id}` )
        }

    })

}

const id = 3000


getEmpleado(id)
    .then( empleado =>{
        nombre = empleado;
        return getSalario(id)
    })
    .then( salario => console.log(`El empleado ${nombre}, tiene un salario de ${salario}`))
    .catch( err => console.log(err))
