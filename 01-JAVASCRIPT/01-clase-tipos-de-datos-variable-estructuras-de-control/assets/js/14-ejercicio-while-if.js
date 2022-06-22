/*
=======EJERCICIO IF WHILE==============================
Hacer un programa, que nos diga 
si un numero es par o impar
1.- Una Ventana prompt
2.- Si no es valido que nos vuelva a pedir de nuevo el numero

=================================================
*/

// var number = parseInt(prompt('Introduce un numero',0));

while(isNaN(number)){
	var number = parseInt(prompt('Introduce un numero',0)); 
	if(number % 2 == 0){
		alert('Es un numero par');
	}else{
		alert('Es un numero impar');
	}
	 
}



