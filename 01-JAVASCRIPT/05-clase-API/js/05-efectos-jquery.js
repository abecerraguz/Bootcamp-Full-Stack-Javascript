// Detecta que el DOM este cargado
$(function(){

/* 
   ===========EFECTOS JQUERY====================================

	Uso de show() hide() fadeIn() fadeOut() fadeTo()

*/
   let mostrarOcultar =  $('#mostrarOcultar')
   let cajaCard = $('#cajaCard')
   let cajaAnimar = $('#cajaAnimar')

   let animarCaja =$('#animarCaja')

   mostrarOcultar.click(function(){
	   
      cajaCard.slideToggle()

      let that = $(this);
		
	  if(that.hasClass('ocultar')){
			that.text('Ocultar');
			that.removeClass('ocultar');
		}else{
			that.text('Mostrar');
			that.addClass('ocultar');
		}

   })

   animarCaja.click(function(event) {
		cajaAnimar.animate({
			marginLeft: '500px'

			},
			'slow', function() {
			console.log('Animacion completada 1')
		})
		.animate({
			marginTop: '100px'

			},
			'fast', function() {
			console.log('Animacion completada 2')
		})
		.animate({
			marginLeft: '0',
			marginTop: '100px'

			},
			'fast', function() {
			console.log('Animacion completada 3')
		})
		.animate(
			{
				marginLeft: '0',
				marginTop: '0px'
			},
				'fast', function() {
				console.log('Animacion completada 4')
			}
		);
	});
   
   

});