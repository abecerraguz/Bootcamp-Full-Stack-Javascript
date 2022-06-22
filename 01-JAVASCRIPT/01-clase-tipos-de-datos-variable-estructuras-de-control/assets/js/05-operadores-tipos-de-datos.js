//--------------OPERADORES
var numero1 = 7;
var numero2 = 12;
//var operacion = numero1+numero2;
//var operacion = numero1*numero2; //Multiplicacion
//var operacion = numero1-numero2; //Resta
//var operacion = numero1/numero2; //División
//var operacion = numero1%numero2; //Resto
//alert('El resultado de la operación es:'+operacion);


//---------------TIPOS DE DATOS BASICOS
var numero_entero   	= 44;
var cadena_de_texto 	= "Hola que tal";
var verdadero_o_falso 	= true; // Valor booleano puede ser true o false
// Otros tipos de datos son los array y los objetos que los vermeos más adelante
// var cosas = ['Naranja',5,true,null]


//--------------FUNCIONES PARA CONVERTIR UN DATO A OTRO
var numero_falso = "33.4";
var numero_true = 30

console.log('Numero falso', numero_falso+7) // 33.47 No se suma el valor dado que es un string 
console.log("Number " + (Number(numero_falso)+7) ); // 40.4 Number lo convierte a número
console.log("parseInt " + (parseInt(numero_falso)+7 ) ); // 40 parseInt 40 ParseInt Si es decimal o flotante lo convierte a Entero
console.log( ( "parseFloat " + (parseFloat(numero_falso)+7) ) ); // 40.4 parseFloat lo convierte a número pero lo lleva a flotante

//Pasar una variable a String
console.log("Lo pasa a string "+String(numero_true)+4);






