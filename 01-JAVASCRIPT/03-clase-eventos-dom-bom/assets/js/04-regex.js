

const validar = (dato) => {
    if(/[a-zA-Z]+$/.test(dato)){
        console.log('Son letras')
    }else{
        console.log('Son numeros')
    }
    return dato
}

console.log('Salida de datos ', validar('Hola mundo'));
