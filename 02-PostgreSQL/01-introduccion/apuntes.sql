
-- Comentario de linea 
/*

    Cometario de Bloque
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi odit ducimus, reiciendis unde molestias optio rerum dolorum, facilis architecto laborum incidunt tenetur aliquid qui voluptatibus, ipsam similique ab repudiandae.

    CREATE TABLE nombre_tabla(
        columna1 tipo_de_dato1,
        columna2 tipo_de_dato2,
        columna3 tipo_de_dato3,
        PRIMARY KEY (columnaN)
    );

    CREATE TABLE Directorio_telefonico(
        nombreVARCHAR(25), 
        apellido VARCHAR(25),
        numero_telefonico VARCHAR(8), 
        direccionVARCHAR(255), 
        edad INT, 
        PRIMARY KEY( numero_telefonico )
    );

*/

-- PASO 1 CREO LA BASE DE DATOS
CREATE DATABASE nombre_bd;
-- PASO 2 
CREATE TABLE Directorio_telefonico(
    nombre VARCHAR(25),
    apellido VARCHAR(25),
    numero_telefonico VARCHAR(8),
    direccion VARCHAR(255),
    edad INT,
    PRIMARY KEY (numero_telefonico)
);

CREATE TABLE Agenda(
    nick VARCHAR(25),
    numero_telefonico VARCHAR(8),
    FOREIGN KEY (numero_telefonico) REFERENCES Directorio_telefonico(numero_telefonico)
);

INSERT INTO Directorio_telefonico
( nombre,apellido,numero_telefonico,direccion,edad )
VALUES ('Juan','Perez', '12345678','Villa Pajaritos', 24);


DELETE FROM tabla_ventas WHERE id_producto='2468';


CREATE TABLE empleados(
    nombre VARCHAR(25) NOT NULL,
    fecha_ingreso VARCHAR(8),
    genero VARCHAR(15),
    rut VARCHAR(30) UNIQUE
);

CREATE TABLE productos(
	nombre VARCHAR(25), 
	id INT UNIQUE, 
	fecha_creacion DATE, 
	proveedor VARCHAR(255), 
	categoria VARCHAR(255), 
	PRIMARY KEY (id) 
);

CREATE TABLE ventas(
	fecha DATE, 
	id_Producto INT, 
	cliente VARCHAR(255), 
	metodo_pago VARCHAR(255),
	referencia INT,
	FOREIGN KEY (id_Producto) REFERENCES productos(id)
);

-- Comedwgwgwgwg