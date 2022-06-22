/*

    Realizar un programa para una tienda de instrumentos musicales, la cual necesita ordenar
    los instrumentos musicales que posee. La tienda solicita crear el programa para ordenar por
    por el tipo de instrumento (cuerda o viento) por los momentos. Por lo que requiere mostrar
    desde la clase superior “ Tienda” la direcci n del local comercial, mientras que en la clase de
    “Instrumento” se debe mostrar en un m todo el mensaje con el n mero de serie del
    instrumento. Para lograr esto, se debe crear una instancia para cada tipo de instrumento
    pasando como par metros todos los datos requeridos por las clases superiores.

*/
class Tienda{
    constructor(direccion){
        this.direccion = direccion
    }
    datosTienda(){
        console.log(`La dirección de la tienda es ${this.direccion}`)
    }
}

class instrumento extends Tienda{

    constructor(serial,direccion){
        super(direccion)
        this.serial = serial
    }

    datosInstrumento(){
        console.log(`El número de serie es ${this.serial}`)
    }

}

class Cuerdas extends Instrumento {
    constructor(direccion, serial, numeroCuerdas,) {
    super(direccion, serial)
        this.numeroCuerdas = numeroCuerdas;
    }
}

class Viento extends Instrumento {
    constructor(direccion, serial, material_cosntruc,) {
    super(direccion, serial)
        this.material_cosntruc = material_cosntruc;
    }
}


let guitarra = new Cuerdas('Santiago de Chile', 'B00HQWRTTU', 6);
let trompeta = new Viento('Santiago de Chile','XERF45TGFD','Metal');
guitarra.datosTienda();
guitarra.datosInstrumento();
trompeta.datosTienda();
trompeta.datosInstrumento();


