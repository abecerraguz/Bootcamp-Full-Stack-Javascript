/*
=======PARAMETROS==============================
Los Parametros son variables que van alterar 
la lógica o el resultado de la funcion
mostrar = false , son parametros opcionales que ya viene inicializada por defecto
=================================================
*/

function calculadora(numero1,numero2, mostrar=false){

    if(mostrar == false){
        console.log('Suma ' +(numero1+numero2));
        console.log('Restar ' +(numero1-numero2));
        console.log('Mutiplicar ' +(numero1*numero2));
        console.log('Division ' +(numero1/numero2));
        console.log('**********************************')
    }else{
        document.write('Suma ' +(numero1+numero2));
        document.write('Restar ' +(numero1-numero2));
        document.write('Mutiplicar ' +(numero1*numero2));
        document.write('Division ' +(numero1/numero2));
        document.write('**********************************')
    }
}

calculadora(1,4);
calculadora(2,5,true);






