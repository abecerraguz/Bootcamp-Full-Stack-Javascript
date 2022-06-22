import { API } from './api.js';
import * as UI from './interfaz.js';

UI.divMensajes.style.display = 'none';


UI.formularioBuscar.addEventListener('submit', (e) => {
    
     e.preventDefault();

     // Obtener datos del formulario
     const artista = document.querySelector('#artista').value,
           cancion = document.querySelector('#cancion').value;

     if(artista === '' || cancion === '') {
          // El usuario deja los campos vacios, mostrar error
          UI.divMensajes.innerHTML = 'Error... Todos los campos son obligatorios';
          UI.divMensajes.style.display = 'block';
          setTimeout(() => {
               UI.divMensajes.innerHTML = '';  
               UI.divMensajes.style.display = 'none';  
          }, 3000);

          return
     }
     const busqueda = new API(artista,cancion);
     busqueda.consultarAPI()
});