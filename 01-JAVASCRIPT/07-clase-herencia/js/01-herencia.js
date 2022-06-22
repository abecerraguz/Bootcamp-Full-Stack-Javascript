/* 

Para iniciar con el concepto de Herencia, primero veamos el significado de la palabra de
manera general según la Real Academia Espa ola (RAE), quien indica que Herencia es un:
“Conjunto de caracteres que los seres vivos reciben de sus progenitores.”,

===01 EJERCICIO GUIADO===
Crear una clase padre con el nombre de “Vehículo” en conjunto con los atributos “marca”,
“color”, “matr cula”, adem s de las tres clases hijas “coche”, “moto” y “bus”, heredando los
atributos de la clase veh culo. Finalmente,


Paso 2: En el c digo anterior, se puede observar como el constructor de la clase
alberga tres propiedades que ser n comunes igualmente para las clases que se
derivan de ella, es decir, para las clases hijas denominadas: coche, moto y bus. Por
ende, en ES6 simplemente tenemos que utilizar la palabra reservada “extends”
despu s de la declaraci n de la clase e indicar el nombre de la clase de la cual
queremos que herede todos los m todos y propiedades. Como se muestra a
continuaci n en el siguiente trozo de c digo:


Paso 3: Se puede observar en el c digo anterior como la clase Coche se extiende de
la clase Veh culo, lo cual, permitir  a la clase Coche utilizar las propiedades que ya
tiene declarada en el constructor la clase Vehiculo. Ahora bien, para lograr esto se
debe implementar una nueva instrucci n en el constructor de la clase hija “Coche”
mediante la palabra reservada “super”, pasando como argumento los valores de las
propiedades que deseamos inicializar de la clase padre, por lo que no es necesario
inicializar las propiedades en la clase hija. Ahora, agreguemos el constructor a las
clases hijas “marca, color y matr cula” como se muestra a continuaci n.

*/

// SUPER CLASE
class Vehiculo{
    constructor(marca, color, matricula) {
        this.marca = marca;
        this.color = color;
        this.matricula = matricula;
    }
}

// CLASES HIJAS CON EXTENS HERENDAN LAS PROPIEDADES DEL CONSTRUCTOR DE LA SUPER CLASE
class Coche extends Vehiculo{
    constructor(marca,color,matricula){
        super(marca,color,matricula);
    }
}

class Moto extends Vehiculo{
    constructor(marca,color,matricula){
        super(marca,color,matricula);
    }
}
class Bus extends Vehiculo{
    constructor(marca,color,matricula){
        super(marca,color,matricula);
    }
}

let coche1 = new Coche('Toyota','Negro', '123ABC');
let moto1 = new Moto('Honda','Rojo', '456CDF');
let bus1 = new Bus('Fuso','Blanco', '678EDC');
console.log('salida de coche1-->',coche1);
console.log('---------------------------------------------------------------')
console.log('salida de moto1-->',moto1);
console.log('---------------------------------------------------------------')
console.log('Salida de bus1--->',bus1);
console.log(coche1.marca);
console.log(moto1.color);
console.log(bus1.matricula);

