class Producto {
    constructor(nombre,sku,precio,marca) {
        this.nombre = nombre;
        this.sku = sku;
        this.precio = precio;
        this.marca = marca;
    }
}

class Computadores extends Producto {
    constructor(nombre, sku, precio, marca, procesador){
        super (nombre, sku, precio, marca);
        this.procesador = procesador;
    }
}

class Linea_Blanca extends Producto {
    constructor(nombre, sku, precio, marca, puertas){
        super (nombre, sku, precio, marca);
        this.puertas = puertas;
    }
}

class Zapateria extends Producto {
    constructor(nombre, sku, precio, marca, talla){
        super (nombre, sku, precio, marca);
        this.talla = talla;
    }
}

let pc = new Computadores('Acer Nitro', 'DTG56D', '700000','Acer','AMD7');
let nevera = new Linea_Blanca('Nevera FrioKing', '878GT3', '500000','LG','2');
let zapato = new Zapateria('Runner Team', '24NMGLK', '50000','Nike','42');

console.log(pc);
console.log(nevera);
console.log(zapato);