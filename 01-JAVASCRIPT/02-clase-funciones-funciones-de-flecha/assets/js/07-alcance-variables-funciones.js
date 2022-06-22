function suma (){
    let num1 = prompt('Ingrese un primer numero')
    let num2 = prompt('Ingrese un segundo numero')
    resultado = (parseInt(num1)+parseInt(num2) )
    return resultado
}

function resta (){
    let num1 = prompt('Ingrese un primer numero')
    let num2 = prompt('Ingrese un segundo numero')
    resultado = (parseInt(num1)-parseInt(num2) )
    return resultado 
}

document.write(`Valor de la suma ${suma()}</br>`)
document.write(`Valor de la resta ${resta()}</br>`)