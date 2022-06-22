// PRUEBA CON VAR

var numero = 40;
console.log(numero); // Numero 40
if(true){
	numero = 50;
	console.log(numero); // Numero 50
}

console.log( 'Numero fuera del if---->', numero ); //Numero 50

console.log( '========================EJEMPLO CON LET ====================');

//PRUEBA CON LET
var texto ="Curso de JavaScript";
console.log(texto); // "Curso de JavaScript"
if(true){
	//Let redefine una variable solo en el bloque no a nivel global.
	//Variable let con alcance limitado
	let texto = "Curso de Laravel 5";
	console.log(texto); // "Curso de Laravel 5"
}
console.log(texto) // "Curso de JavaScript"



