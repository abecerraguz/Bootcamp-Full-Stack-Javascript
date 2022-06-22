import { Saiyajin, Humano } from "./clases/Razas.js"
let participantes = []


let btnRegistrar = document.querySelector('#btnRegistrar')
let btnMasFuerte = document.querySelector('#btnMasFuerte')

btnRegistrar.addEventListener('click', (e)=>{
    e.preventDefault();
    // Definimos las variables de nombre y raza
    let nombre = document.querySelector('#nombre');
    let raza = document.querySelector('#raza');
    let ki = document.querySelector('#poderPelea');
    let preview = document.querySelector('#preview')
    let imagen = document.querySelector('#preview img')
    
    

    let nuevoParticipante;

    if(raza.value == 'Saiyajin'){
        nuevoParticipante = new Saiyajin( nombre.value, imagen.src, ki.value, raza.value )
        // console.log('Salida de nuevo participante--->', nuevoParticipante )
    }else if(raza.value == 'Humano' ){
        nuevoParticipante = new Humano( nombre.value, imagen.src, ki.value, raza.value )
        // console.log('Salida de nuevo participante--->', nuevoParticipante )
    }

    if( nombre && raza && ki && imagen){
      

        participantes.push(nuevoParticipante)
        nombre.selectedIndex = 0;
        raza.selectedIndex = 0;
        preview.removeChild(imagen);
        ki.value = ''

        crearCard()

    }else{
        alert("Debe ingresar los datos")
    }
})

// Creamos nuestro card seleccionado para que se visualice 
const crearCard = ()=>{
    let participanteCard = document.querySelector('#Participantes')
    participanteCard.innerHTML = ''
    // console.log('Salida de participantes--->',participantes)
    participantes.forEach((element,index) =>{
        // console.log('Salida de elementttttt-->',element)
        participanteCard.innerHTML += `<div class="px-3 pb-2 participante">
        <div class="card">
          <img src="${element.Img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">${element.Nombre}</h4>
            <hr>
            <p class="card-text">Raza:${element.Raza}</p>
            <p class="card-text">Poder de pelea:<span class="text-danger">${element.Poder}</span></p>
            
            <button type="button" class="btn btn-warning">Habilidad especial</button>
          </div>
        </div>
      </div>`
    })
    document.querySelectorAll(".card-body button").forEach((element) => element.addEventListener("click", activarHabiblidad));
}

btnMasFuerte.addEventListener('click',(e)=>{
    e.preventDefault()

    
    const pruebaAB = participantes.sort( (a, b) => b.getPoder() - a.getPoder() )[0]
    console.log( 'salida pruebaB--->',pruebaAB )

    /*
        Funcion de comparacion que deja el mayor siempre al procipio
        es por eso que se deja el indice 0 del cual se saca el Nombre
        
        ¡¡¡Importante!!! El lenguaje javascript tiene un pequeño defecto y 
        es que toma como referencia siempre el primer elemento de un cadena, 
        que dicho en cristiano si le dices que ordene de menor a mayor los números 
        10, 12 y 5 te lo hará del siguiente modo 12, 10, 5 porque entiende que los dos primeros
        al empezar por "1" son menores que "5".

        Para salvar este problema emplearemos una mini-función 
        comparativa que es ya un clásico entre los programadores de javascript:

        function comparar(a,b){return a-b;}
    */
    const masFuerte = participantes.sort( (a, b) => b.getPoder() - a.getPoder() )[0].getNombre();
    const cardMasFuerte = Array.from( document.querySelectorAll(".participante") )
    const nombreCardMasFuerte = cardMasFuerte.find( name => name.children[0].children[1].children[0].textContent == masFuerte )
    nombreCardMasFuerte.children[0].style.boxShadow = "0px 0px 5px 1px yellow";
})

const activarHabiblidad = (e) => {

    let personajeCard = e.target.parentElement;
    let nombre = personajeCard.children[0].textContent;
   
    participantes = participantes.map( element => {

        if ( element.Nombre == nombre && element.Raza == "Saiyajin" ) {
          console.log('Activar habilidad',element)
          element.Transformacion();
          return element;
        } else if ( element.Nombre == nombre && element.Raza == "Humano" ) {
          element.Coraje();
          return element;
        } else {
          return element;
        }
      });

    crearCard();

}