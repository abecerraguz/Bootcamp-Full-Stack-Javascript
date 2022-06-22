// const getName = callback => { callback('Pedro Rojas') }

const getName = ( callback ) =>{
    name => console.log(name)
    callback('Pedro Rojas')


}

// ejecutamos la funcion y pasamos como parametro otra funcion
getName(  (name) => {
    
            console.log(name)

} )



