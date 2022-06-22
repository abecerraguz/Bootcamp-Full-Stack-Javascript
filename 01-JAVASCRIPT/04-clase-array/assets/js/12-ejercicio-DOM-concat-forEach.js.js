let dataTable = document.querySelector('tbody');
// let dataTable = document.getElementsByTagName('tbody');
    console.log('salida--->',dataTable)
let diurno = [
    {nombre:'Juan',apellido:'Rojas'},
    {nombre:'Pedro',apellido:'Prado'},
    {nombre:'Alexis',apellido:'Sanches' }
]

let verpertino = [
    {nombre:'Daniel',apellido:'Molina'},
    {nombre:'Jorge',apellido:'Fuentes'},
    {nombre:'Francisca',apellido:'Salinas'}
]

let alumnosTotal = diurno.concat(verpertino)

console.log('arregloTotal',alumnosTotal)
console.log('arreglo total',dataTable )

alumnosTotal.forEach(function(element,index){
    console.log('salida de element--->',element,index)
    dataTable.innerHTML += `<tr>
                <th scope="row">${index}</th>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>@mdo</td>
            </tr>`

})




