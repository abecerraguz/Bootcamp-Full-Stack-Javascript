function Persona(nombre, redes_sociales){
    this.nombre = nombre;
    
    this.redes_sociales = redes_sociales || [];
}

Persona.prototype.agregar_redsocial = function(red_social){
    this.redes_sociales.push(red_social);
}

function RedSocial(nombre, id){
    this.nombre = nombre;
    this.id = id;
}

var r1 = new RedSocial('Twitter', '@juanduran85');
var r2 = new RedSocial('GitHub', 'JuanDuran85');
var r3 = new RedSocial('Facebook', 'JuanCDuranR');

var p1 = new Persona('Juan', [r1,r2]);

p1.agregar_redsocial(r3);
console.log(p1)