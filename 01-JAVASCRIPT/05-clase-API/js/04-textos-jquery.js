// Detecta que el DOM este cargado
$(function(){

/* 
   ===========TEXTOS JQUERY====================================
   Queremos tomar los datos de los href de los enlaces y luego meterlos dentro del enlace
   como textos.
*/

/*

 Podemos seleccionar todos los enlaces
 y recorrerlos con un each() esta tiene una función de callback.

*/

   cargarEnlaces()

   $('#addEnlace').click(function(event){

      if($('#nombreEnlace').val().length > 1){
         let dato = $('#nombreEnlace').val();
         console.log('Salida de dato', dato)

         /*
            append (Al final)
            prepend (Al pricipio)
            before (Antes del la lista)
            after (Despues de la lista)
      
         */

         $('#menu').append(`<li><a href="${dato}">${dato}</a></li>`)
         $('#nombreEnlace').val('');

      }else{
         console.log('Estamos en el else')
         $('#nombreEnlace').attr({
            placeholder: 'Ingrese una URLllll'
         });
      }
   })


   function cargarEnlaces(){
      $('#nombreEnlace').attr({
         placeholder:'Ingrese una URL'
      })

      $('a').each(function(){
         // console.log('INDEX--->', index, perro,arr)
         let that = $(this);
         let enlace = that.attr('href')
         console.log('enlace--->',enlace);
         that.text(enlace);
         that.attr('target','_blank')
      })


   }









});