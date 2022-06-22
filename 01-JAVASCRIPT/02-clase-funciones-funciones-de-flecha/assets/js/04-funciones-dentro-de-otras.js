/*
=======PARAMETROS==============================
Los Parametros son variables que van alterar 
la lógica o el resultado de la funcion
mostrar = false , son parametros opcionales que ya viene inicializada por defecto
=================================================
*/


function mostrarEnConsola(numero1,numero2) {
    console.log('Suma ' +(numero1+numero2));
    console.log('Restar ' +(numero1-numero2));
    console.log('Mutiplicar ' +(numero1*numero2));
    console.log('Division ' +(numero1/numero2));
    console.log('**********************************')
}

function mostrarEnPantalla(numero1,numero2) {
    document.write('Suma ' +(numero1+numero2));
    document.write('Restar ' +(numero1-numero2));
    document.write('Mutiplicar ' +(numero1*numero2));
    document.write('Division ' +(numero1/numero2));
    document.write('**********************************')
}

function calculadora(numero1,numero2,mostrar=false){
    if(mostrar == false){
        mostrarEnConsola(numero1,numero2)
    }else{
        mostrarEnPantalla(numero1,numero2)
    }
}

//calculadora(1,4);
calculadora(2,5,true);
//calculadora(4,5,false);





