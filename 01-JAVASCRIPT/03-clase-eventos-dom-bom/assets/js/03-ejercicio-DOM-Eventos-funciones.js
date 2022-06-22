/*
	0. Eventos
	1. Formulario Campos: Nombre, Apellidos y Edad
	2. Boton de enviar el formulario : evento submit
	3. Mostrar datos por Pantall
	4. Validar Formulario
*/
// console.log( typeof(window) == 'object' );

if( typeof(window) == 'object' ){



	//Escuchador de evento
	window.addEventListener('DOMContentLoaded',function(){

		console.log("EL DOM SE CARGO");

		const nav  = document.querySelector('.navegacion');
		nav.addEventListener('mouseover',()=>{
			console.log('Entrando a la navegación')
			nav.style.background = 'red'
		})

		nav.addEventListener('mouseout',()=>{
			console.log('Fuera de la navegación')
			nav.style.background = 'transparent'
		})


		const leerInput = (e) =>{
			console.log('e (event) trae la info del input', e);
			console.log('=======================================')
			console.log('e.type que elemento es',e.type)
			console.log('=======================================')
			console.log('e.target muestra el objeto input', e.target)
			console.log('=======================================')
			console.log('e.target.value trae el dato del input', e.target.value)
		}

		const busqueda = document.querySelector('.busqueda');
		busqueda.addEventListener('input',leerInput)

		//TOMAMOS EL CONTROL DEL FORMULARIO
		let formulario = document.querySelector('#formulario');
		let mensajeDatos = document.querySelector('#alerta');

		mensajeDatos.style.display = 'none';

		let error_nombre = document.querySelector('#error_nombre');
		let error_apellidos = document.querySelector('#error_apellidos');
		let error_edad = document.querySelector('#error_edad');

		error_nombre .style.display = 'none';
		error_apellidos.style.display = 'none';
		error_edad.style.display = 'none';

		formulario.addEventListener('submit',(e)=>{
			e.preventDefault();
			console.log('Evento submit')

			let nombre = document.querySelector('#nombre').value
			let apellidos = document.querySelector('#apellidos').value
			let edad = document.querySelector('#edad').value

			console.log('Salida de nombre--->',/^[a-zA-Z]+$/i.test( parseInt(nombre.trim())) )

			if( (nombre.trim() == null ||  nombre.trim().length == 0 || !(/^[a-zA-Z]+$/i.test( parseInt(nombre.trim())))) && (apellidos.trim() == null ||  apellidos.trim().length == 0 || !(/^[a-zA-Z]+$/i.test( parseInt(apellidos.trim())))) && (edad.trim() == null ||  edad.trim().length == 0 || !(/[0-9]+$/i.test( parseInt(edad.trim()))))  ){

				error_nombre.innerHTML = `El nombre no es valido`;
				error_nombre.style.display = 'block'

				error_apellidos.innerHTML = `El apellido no es valido`;
			    error_apellidos.style.display = 'block'

				error_edad.innerHTML = `La edad no es valida`;
				error_edad.style.display = 'block'

			}else{
				error_nombre.style.display = 'none';
				error_apellidos.style.display = 'none';
				error_edad.style.display = 'none';
				mensajeDatos.style.display = 'block'

				// mensajeDatoNombre.insertAdjacentHTML = 'Hola'
				document.querySelector('#p_nombre').append(nombre)
				document.querySelector('#p_apellidos').append(apellidos)
				document.querySelector('#p_edad').append(edad)
			
			}


		})

	})



}