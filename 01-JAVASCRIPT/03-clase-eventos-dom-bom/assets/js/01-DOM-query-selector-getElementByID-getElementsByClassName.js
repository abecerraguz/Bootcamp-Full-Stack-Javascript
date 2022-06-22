/*
=======MANIPLANDO ELEMENTOS DE LA PÁGINA ======================================================================
	1.Query Selector
	2.getElementsById
	3.getElementsByClassName
==============================================================================================
*/

let todosLosDiv = document.getElementsByTagName('div');
let section = document.querySelector('#miseccion');
let hr = document.createElement('hr');

console.log('todosLosDiv-->',todosLosDiv)
console.log('todosLosDiv-->',section)
console.log('todosLosDiv-->',hr)


for (let i = 0; i < todosLosDiv.length; i++) {
	
	todosLosDiv[i].classList.add('container');

	console.log('textContent-->', typeof todosLosDiv[i].textContent)

	if(typeof todosLosDiv[i].textContent == 'string'){
		//Creamos un objeto HTML
		let parrafo = document.createElement('h3');
		let texto = document.createTextNode(todosLosDiv[i].textContent);

		parrafo.append(texto);
		section.append(parrafo)

		section.classList.add('container');

		document.querySelector('.font-weight-bold').classList.add('container')

	}
	
}

section.before(hr);

let divRojos = document.getElementsByClassName('rojo');
console.log('divRojos', divRojos)
let divAmarillos = document.getElementsByClassName('amarillo');

divRojos[0].style.background = 'red';
divAmarillos[0].style.background = 'yellow';

for (let index = 0; index < divRojos.length; index++) {
	divRojos[index].style.background = 'red'
}


let id = document.querySelector('#encabezado');
let claseRojo = document.querySelector('.rojo');
let todasLasClases = document.querySelectorAll('.rojo')

console.log('id---->',id)
console.log('claseRojo---->',claseRojo)
console.log('todasLasClases---->',todasLasClases)



