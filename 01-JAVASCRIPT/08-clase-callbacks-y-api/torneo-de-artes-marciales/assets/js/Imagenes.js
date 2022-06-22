import dataPersonajes  from './Consulta.js'

document.querySelector('#buttonImages').addEventListener('click', async(e)=>{   
    
    e.preventDefault();
    const { personajes } = await dataPersonajes;
    const nombrePersonaje = document.querySelector("#nombre").value;
    const personajeSelect = personajes.find( ( p ) => p.name == nombrePersonaje )
    const imagenes = personajeSelect.imagenes
    const obtenerImgDelPersonaje = imagenes.map((img) => `<img width="200" src="./assets/imgs/${nombrePersonaje}/${img}"/>`).join("")
    const modalInsertPersonajes = document.querySelector('.personajes')
    modalInsertPersonajes.innerHTML = obtenerImgDelPersonaje
   
    // Seleccionar cada imagen y asignarle un evento click 
    // Para que cierre la modal y para que la foto seleccionada se previsualice en la interfaz
    const imgModal  = document.querySelectorAll('.personajes img')
    // console.log('Salida de imgModal--->',imgModal)
    imgModal.forEach((element)=>{
        element.style.cursor = 'pointer';
        element.addEventListener('click',(e)=>{
            console.log('CLICK EN LA IMAGEN')
            $('#imagenesModal').modal('toggle');
            const imgSrc = e.target.src
            let imagen = document.createElement('img')
            imagen.setAttribute('src', imgSrc)
            // console.log('Salida de imagen-->',imagen)
            // document.querySelector('#preview').style.backgroundImage = `url(${imgSrc})`
            document.querySelector('#preview').appendChild(imagen) 
        })
    })

})