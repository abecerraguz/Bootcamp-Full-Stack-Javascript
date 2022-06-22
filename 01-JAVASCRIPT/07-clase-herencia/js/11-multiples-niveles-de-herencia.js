class Motores {
    constructor(serial,fabricante){
        this.serial = serial;
        this.fabricante = fabricante;
    }
    datosMotor(){
        return `El n mero de serial es: ${this.serial} y el fabricante es la empresa: ${this.fabricante}`;
    }
}

class Electricos extends Motores {
    constructor(serial, fabricante, potencia, corriente){
        super (serial, fabricante);
        this.potencia = potencia;
        this.corriente = corriente;
    }
    tipoCorriente(){
        return `El tipo de corriente es: ${this.corriente}`;
    }
}

class CC extends Electricos {
    constructor(serial, fabricante, potencia, corriente, voltaje, tipo){
        super (serial, fabricante, potencia, corriente);
        this.voltaje = voltaje;
        this.tipo = tipo;
    }
}

class CA extends Electricos {
    constructor(serial, fabricante, potencia, corriente, fases,frecuencia){
        super (serial, fabricante, potencia, corriente);
        this.fases = fases;
        this.frecuencia = frecuencia;
    }
}

let motorCC = new CC('133DGH', 'GE', '2000W', 'CC', '220CC', 'Shunt');
let motorCA = new CA('7566DGD', 'ABB', '2HP', 'CA', 'Monofasico','50Hz');
console.log(motorCC.datosMotor());
console.log(motorCC.tipoCorriente());
console.log(motorCA.datosMotor());
console.log(motorCA.tipoCorriente());

// El n mero de serial es: 133DGH y el fabricante es la empresa: GE
// El tipo de corriente es: CC
// El n mero de serial es: 7566DGD y el fabricante es la empresa: ABB
// El tipo de corriente es: CA

