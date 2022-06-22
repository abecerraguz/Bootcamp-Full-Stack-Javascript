const child_process = require('child_process');

let num1 = null;
let num2 = null;

function ejecutar(archivo){
    return new Promise((resolve)=>{
        // Ver la documentacion de quien? de child_process
        child_process.exec(`node ${archivo}`, function(err,result){
            resolve(Number(result));
        });
    });
}

ejecutar("num1.js").then((numero1)=>{
    num1 = numero1;
    ejecutar("num2.js").then((numero2)=>{
        num2 = numero2;
        console.log(num1+num2)
    });
});

