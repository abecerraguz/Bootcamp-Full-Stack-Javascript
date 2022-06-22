console.log('============ EJERCICIO CON VARIABLES LOCALES ================')
// //
// function local(){
//     var a = 2
//     console.log(a);
// }
//
// local();
// console.log(a)
// 2 de la funcion local
// 1 de la variable global

const operaciones = (num1,num2) =>{
	return {
		suma:() => num1+num2
	}
}

const b = operaciones(1,2)
console.log(b)
