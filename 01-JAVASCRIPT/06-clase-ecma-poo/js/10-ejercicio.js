function Consultorio(nombre,paciente){
    
    this._nombre = function(){
        return nombre;
    }

    this._paciente = function(){
        return paciente || []
    }
}

Consultorio.prototype.getName = function(){
    return this._nombre
}

Consultorio.prototype.setName = function(nuevo_nombre){
    return this._nombre = function(){
        return nuevo_nombre
    }
}

Consultorio.prototype.agregarPaciente = function(paciente){
    this.paciente.push(paciente)
}

Consultorio.prototype.getPacientes = function () {
    this._pacientes().array.forEach(function(elemnto,index){
        console.log("Paciente " + index)
        console.log("Nombre " + elemnto._nombre())
    })
}

Consultorio.prototype.getPacientePorNombre = function(busquedaNombre){
    this._pacientes().array.forEach(function(elemnto,index){
        if(elemnto._nombre == busquedaNombre){
            console.log("Nombre " + elemnto._nombre())  
        }
    })
}


function Paciente(nombre,edad,rut,diagnostico){
    this._nombre = function(){
        return nombre;
    }

    this._edad = function(){
        return edad;
    }

    this._rut = function(){
        return rut;
    }

    this._diagnostico = function(){
        return diagnostico;
    }
}