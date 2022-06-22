/*
=======PARAMETROS==============================
Los Parametros son variables que van alterar 
la lógica o el resultado de la funcion
=================================================
*/

function calculadora(numero1,numero2){
    console.log('Suma ' +(numero1+numero2));
    console.log('Restar ' +(numero1-numero2));
    console.log('Mutiplicar ' +(numero1*numero2));
    console.log('Division ' +(numero1/numero2));
    console.log('**********************************')
}

for(var i = 1; i<=10;i++){
    console.log(i);
    calculadora(i,8);
}

