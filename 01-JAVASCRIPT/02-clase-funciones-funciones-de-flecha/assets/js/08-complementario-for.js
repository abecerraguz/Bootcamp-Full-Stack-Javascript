console.log()
console.log('====================FOR CON INCREMENTADOR========================')
console.log()
for( let inicio = 1; inicio <= 10; inicio++){
    console.log(`salida inicio inicio++ incrementador, let inicio = ${inicio}; ${inicio} <= 10; inicio++ (${inicio}) , salida ${inicio}`, inicio)
}
console.log()
console.log('===============================================')
console.log()
for( let inicio = 1; inicio <= 10; inicio++){
    let acumulador = inicio;
    console.log(`Salida acumulador en multiplicacion ${acumulador}`,acumulador*=acumulador);  
}
console.log()
console.log('===============================================')
console.log()
for( let inicio = 1; inicio <= 10; inicio++){
    let acumulador = inicio;
    console.log(`Salida acumulador en Suma ${acumulador}`,acumulador+=acumulador);  
}
console.log()
console.log('===============================================')
console.log()
for( let inicio = 1; inicio <= 10; inicio++){
    let acumulador = inicio;
    console.log(`Salida acumulador en Resta ${acumulador}`,acumulador-=acumulador);  
}
console.log()
console.log('================ EJEMPLO CON WHILE ES INFINITO SI NO SE ROMPE ==================')
console.log()
let inicio = 1
while (inicio <= 10) {
    console.log(`salida inicio inicio++ incrementa en ${inicio}`, inicio)
    inicio++
}

console.log()
console.log('================ FUNCION MULTIPLICACION MULTIPLICACION(10)==================')
console.log()

const multiplicacion = numero => {
    for( let inicio = 1; inicio <= numero; inicio++){
        console.log(`Salida inicio ${inicio}, en multiplicacion ${inicio}x${numero}`, (inicio*numero)  );  
    }
}
multiplicacion(10);

console.log()
console.log('================ FUNCION SUMA SUMA(3)==================')
console.log()

const suma = numero => {
    for( let inicio = 1; inicio <= numero; inicio++){
        console.log(`Salida inicio ${inicio}, en suma ${inicio}+${numero}`, (inicio+numero)  );  
    }
}
suma(3);


console.log()
console.log('================ FUNCION FACTORIAL FACTORIAL(3)==================')
console.log()
// factorial de 4 es 24, tenemos que multiplicar los números 1, 2, 3 y 4

const factorial = numero => {

    // factorial de 3 es 6
    // 1x2 = 2
    // 2x3 = 6

    let total = 1; 
	for (i=1; i<=numero; i++) {
       
		total = total * i; 

        console.log(`Total ${total} = (Total)${total} x (i) ${i}`)
	}
	return total; 
}
factorial(5);


