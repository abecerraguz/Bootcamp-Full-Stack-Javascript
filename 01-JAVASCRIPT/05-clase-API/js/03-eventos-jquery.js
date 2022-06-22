// Detecta que el DOM este cargado
$(function(){
/* 
   ===========EVENTOS JQUERY====================================

*/

let caja = $('#caja');
let nombre = $('#nombre')
let mensaje = $('.alert-secondary')

function eventOrange(){
   $(this).css({
      background:'orange'
   })
}

function eventPurple(){
   $(this).css({
      background:'purple'
   })
}

caja.hover(eventOrange,eventPurple)

caja.dblclick(function(){
   $(this).css({
      background: 'pink',
      color:'black'
   })
})


nombre.focus(function(event){
   $(this).css({
      border:'1px solid red',
      'box-shadow' : 'none'
   })
   console.log('EN FOCO')
})

nombre.blur(function(event){
   $(this).css({
      border:'1px solid green'
   })
   mensaje.text($(this).val()).show()
   console.log('FUERA DEL FOCO')
})

mensaje.mouseup(function(event){
   $(this).css({
      color:'red'
   })
})

$(document).mousemove(function(event){
   console.log(`EN X :${event.clientX}`)
   console.log(`EN Y :${event.clientY}`)
   $('body').css({
      cursor:'none'
   })

   $('.circle').css({
      left:event.clientX,
      top:event.clientY
   })

})






});