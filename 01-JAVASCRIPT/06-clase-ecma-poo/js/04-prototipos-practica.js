function Rectangulo(ancho,alto){
    this.ancho = ancho
    this.alto = alto
}

Rectangulo.prototype.calcularArea = function(){
    return this.ancho * this.alto
}

Rectangulo.prototype.calcularPerimetro = function(){
    return ((this.ancho)*2 + (this.alto)*2)
}

let rectangulo1 = new Rectangulo(80,40)
console.log(rectangulo1.calcularArea())
console.log(rectangulo1.calcularPerimetro())

