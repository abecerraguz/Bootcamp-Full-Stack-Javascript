// Definición del callback de la promesa:
console.clear()
const callback = (resolver, rechazar) => {
    // Con un 50% de probabilidad:
    console.log('Salida de Math.random()--->',Math.random())

    if(Math.random() >= 0.5){
        setTimeout(function () {
            resolver("Resuelto, El número resultante fue mayor o igual a 0.5 ");
        }, 5000);
    }else{
        rechazar("Rechazado, El número resultante fue menor a 0.5 :/");
    }
};
const promesa = new Promise(callback);

promesa
.then((mensaje) => {
    console.log("¡Sí! La promesa se resolvió sin problema y el mensaje resultante es:");
        console.log(mensaje)
})
.catch((error) => {
    console.log("Bah… Algo salio mal :(, el error es el siguiente:")
    console.log(error)
});

