function IngresoEmpresa( registroId, nombre, rut, giro, importaciones){
    
    this._registroId = function () {
        return registroId;
    }

    this._nombre = function () {
        return nombre;
    }

    this._rut = function () {
        return rut;
    }

    this._giro = function () {
        return giro;
    }

    this._importaciones = function () {
        return importaciones || [];
    }
 
}


//INICIO REGISTRO ID
IngresoEmpresa.prototype.getRegistroId = function(){
    return this._registroId();
};

IngresoEmpresa.prototype.setRegistroId = function(nuevo_registroId){
    this._setRegistroId = function () {
        return nuevo_registroId;
    }
};



//INICIO REGISTRO NOMBRE
IngresoEmpresa.prototype.getNombre = function(){
    return this._nombre();
};

IngresoEmpresa.prototype.setNombre = function(nuevo_nombre){
    this._setNombre = function () {
        return nuevo_nombre;
    }
};

//INICIO REGISTRO RUT
IngresoEmpresa.prototype.getRut = function(){
    return this._rut();
};

IngresoEmpresa.prototype.setRut = function(nuevo_rut){
    this._setRut= function () {
        return nuevo_rut;
    }
};

//INICIO REGISTRO GIRO
IngresoEmpresa.prototype.getGiro = function(){
    return this._giro();
};

IngresoEmpresa.prototype.setGiro = function(nuevo_giro){
    this._setGiro = function () {
        return nuevo_giro;
    }
};


IngresoEmpresa.prototype.agregarImportacion = function (importaciones) {
    this.importaciones.push(importaciones)
}

IngresoEmpresa.prototype.sumTotalImportaciones = function () {
    var total = 0
    this._importaciones().forEach(function(element) {
        total = total+element._numeroProducto()
    });
    return total
}
IngresoEmpresa.prototype.sumTotalValorImport = function () {
    var total = 0
    this._importaciones().forEach(function(element) {
        total = total+(element._numeroProducto() * element._precioUnitario())
        // console.log('TOTAL------>', total)
    });
    return total
}




function Importaciones(registroId,producto,numeroProducto,precioUnitario) {
    
    this._registroId = function () {
        return registroId;
    }
    this._producto = function () {
        return producto;
    }
    this._numeroProducto = function () {
        return numeroProducto;
    }
    this._precioUnitario = function () {
        return precioUnitario;
    }
}


//INICIO REGISTRO ID
Importaciones.prototype.getRegistroId = function(){
    return this._registroId();
};

//INICIO REGISTRO ID
Importaciones.prototype.setRegistroId = function(nuevo_registroId){
    this._setRegistroId = function () {
        return nuevo_registroId;
    }
};

//INICIO REGISTRO ID
Importaciones.prototype.getProducto = function(){
    return this._producto();
};

//INICIO REGISTRO ID
Importaciones.prototype.setProducto = function(nuevo_producto){
    this._setProducto = function () {
        return nuevo_producto;
    }
};

//INICIO REGISTRO ID
Importaciones.prototype.getNumeroProducto = function(){
    return this._numeroProducto();
};

//INICIO REGISTRO ID
Importaciones.prototype.setNumeroProducto = function(nuevoNumeroProducto){
    this._setNumeroProducto = function () {
        return nuevoNumeroProducto;
    }
};

//INICIO REGISTRO ID
Importaciones.prototype.getPrecioUnitario = function(){
    return this._precioUnitario();
};

//INICIO REGISTRO ID
Importaciones.prototype.setPrecioUnitario = function(nuevoPrecioUnitario){
    this._setPrecioUnitario = function () {
        return nuevoPrecioUnitario;
    }
};

Importaciones.prototype.sumValorImport = function () {
    var total = this._numeroProducto() * this._precioUnitario()
    return total
}


var imp1 = new Importaciones(1,'Tornamesas',500,100)
var imp2 = new Importaciones(2,'Vinilos',100,50)
var emp1 = new IngresoEmpresa(1,'Arlequín Eventos S.A','28.349.557-6','Eventos musicales', [imp1,imp2]);

console.log('Nombre de la Empresa es ', emp1.getNombre())
console.log('La numero total de las importaciones de la empresa es ' + emp1.sumTotalImportaciones())
console.log('La empresa '+ emp1.getNombre() + ' con giro ' + emp1.getGiro() + ' gasto '+ emp1.sumTotalValorImport() + ' Pesos')

console.log('Su importacion numero '+ imp1.getRegistroId() +' es de '+ imp1.getProducto()+', el numero de importaciones es de '+ imp1.getNumeroProducto() +' Unidades y su valor unitario es de '+ imp1.getPrecioUnitario() +' pesos el total de gasto fueron '+imp1.sumValorImport()+' pesos')


