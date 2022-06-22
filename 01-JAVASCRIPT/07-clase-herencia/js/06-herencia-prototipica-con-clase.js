class FiguraGeometrica {
    constructor(lado){
        this.lado = lado;
    }
}

class Poligono extends FiguraGeometrica {
    constructor(lado){
        super(lado);
    }
    calcularArea(){
        return this.lado * this.lado;
    }
}

var cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea());

