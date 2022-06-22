-- Matar el puerto
kill -9 PID

CREATE DATABASE "Clinica_Postgres"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8';
	
CREATE SCHEMA CLINICA AUTHORIZATION postgres;

DROP SCHEMA PUBLIC;

/*
Que son los dominios?, son un tipo de datos en el cual vamos almacenar 
ciertas rectricciones de entrada y delimitar 

*/

CREATE DOMAIN CLINICA.ID_PACIENTE AS CHAR(6) NOT NULL
	CHECK (VALUE ~ '^[P]{1}[-]{1}\d{4}$'); 

CREATE DOMAIN CLINICA.ID_MEESPECIALISTA AS CHAR(7) NOT NULL
	CHECK (VALUE ~ '^[ME]{2}[-]{1}\d{4}$');
	
CREATE DOMAIN CLINICA.ID_CITA AS CHAR(7) NOT NULL
	CHECK (VALUE ~ '^[CM]{2}[-]{1}\d{4}$'); 
	
	
CREATE TABLE "CLINICA".PACIENTE (
	pk_idPaciente "CLINICA".ID_PACIENTE,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(20) NOT NULL,
	sexo CHAR(1) NOT NULL,
	fechaNacimiento DATE NOT NULL,
	ciudad VARCHAR(20) NOT NULL,
	comuna VARCHAR(20) NOT NULL,
	telefono CHAR(10) UNIQUE,
	PRIMARY KEY (pk_idPaciente)
);

CREATE TABLE "CLINICA".ESPECIALISTA(
	pk_idEspecialista "CLINICA".ID_MEESPECIALISTA,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(20) NOT NULL,
	sexo CHAR(1) NOT NULL,
	fechaNacimiento DATE NOT NULL,
	especialidad VARCHAR(30) NOT NULL,
	PRIMARY KEY (pk_idEspecialista)
);

CREATE TABLE "CLINICA".EXPEDIENTE (
	pk_idPaciente "CLINICA".ID_PACIENTE,
	tipoSangre VARCHAR(10) NOT NULL,
	tipoAlergia VARCHAR(50) NOT NULL,
	padecimientoCro VARCHAR(50) NOT NULL,
	fechaCreacion TIMESTAMP NOT NULL,
	PRIMARY KEY (pk_idPaciente),
	FOREIGN KEY (pk_idPaciente) REFERENCES "CLINICA".PACIENTE(pk_idPaciente)
	ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE "CLINICA".EXPEDIENTE_DIAGNOSTICO(
	folio SERIAL NOT NULL,
	fk_idEspecialista "CLINICA".ID_MEESPECIALISTA,
	fk_idPaciente "CLINICA".ID_PACIENTE,
	edad CHAR(3) NOT NULL,
	peso CHAR(3) NOT NULL,
	altura CHAR(4) NOT NULL,
	IMC CHAR(5) NOT NULL,
	nivelPeso CHAR(10) NOT NULL,
	presionArterial CHAR(8) NOT NULL,
	diagnostico VARCHAR(150) NOT NULL,
	recetario VARCHAR(150) NOT NULL,
	fechaCreacion TIMESTAMP NOT NULL,
	PRIMARY KEY (folio),
	FOREIGN KEY (fk_idEspecialista) REFERENCES "CLINICA".ESPECIALISTA(pk_idEspecialista)
	ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (fk_idPaciente) REFERENCES "CLINICA".EXPEDIENTE(pk_idPaciente)
	ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE "CLINICA".CITA (
	pk_idCita "CLINICA".ID_CITA,
	fk_idPaciente "CLINICA".ID_PACIENTE,
	fecha DATE NOT NULL,
	hora TIME NOT NULL,
	PRIMARY KEY (pk_idCita),
	FOREIGN KEY (fk_idPaciente) REFERENCES "CLINICA".PACIENTE(pk_idPaciente)
	ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE "CLINICA".AGENDAR_CITA(
	fk_idCita "CLINICA".ID_CITA,
	fk_idEspecialista "CLINICA".ID_MEESPECIALISTA,
	consultario VARCHAR(20) NOT NULL,
	fechaCita DATE NOT NULL,
	horaCita TIME NOT NULL,
	turno VARCHAR(10) NOT NULL,
	status VARCHAR(10) NOT NULL,
	observaciones VARCHAR(100) NOT NULL,
	PRIMARY KEY (fk_idCIta, fk_idEspecialista),
	FOREIGN KEY (fk_idCita) REFERENCES "CLINICA".CITA (pk_idCita)
	ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (fk_idEspecialista) REFERENCES "CLINICA".ESPECIALISTA(pk_idEspecialista)
	ON UPDATE CASCADE ON DELETE CASCADE
);




/*  ============MODIFICAR UNA TABLA =======================================*/

-- AGREGAR UNA COLUMNA
ALTER TABLE CLINICA.PACIENTE ADD COLUMN EJEMPLO VARCHAR(30);

-- BORRAR COLUMNA
ALTER TABLE CLINICA.PACIENTE DROP COLUMN EJEMPLO;

-- CAMBIAR TIPO DE DATO
ALTER TABLE CLINICA.PACIENTE ALTER COLUMN EJEMPLO TYPE CHAR(50);

-- IMPORTANTE AL CAMBIAR UN TIPO DE DATO ESTE DEBE SER COMPATIBLE SI PASAMOS DE CHAR A INTERGER NOS DARA UN ERROR

-- RENOMBRAR COLUMNA
ALTER TABLE CLINICA.PACIENTE RENAME COLUMN EJEMPLO TO EJEMPLO_NUEVO;

-- RENOMBRAR TABLA
ALTER TABLE CLINICA.PACIENTE RENAME TO PACIENTE_NUEVO;


/*  ============ ELIMINAR UNA TABLA =======================================*/

DROP TABLE CLINICA.PACIETE;
-- IMPORTANTE no puedes borrar tablas que tienen una relación directa con otras tablas;

-- SI PODEMOS ELIMINAR directamente una tabla que no tiene relación o un bajo nivel jerarquico.
DROP TABLE CLINICA.EXPEDIENTE_DIAGNOSTICO;

-- COMO PODEMOS BORRAR UNA TABLA QUE ESTA RELACIONADA
DROP TABLE CLINICA.PACIETE CASCADE;

/*  ============ INSERCIONES DE DATOS =======================================*/
/*

Para insertar datos siempre partimos por nuestras tablas padres o fuertes. En este caso son:

	-Pacientes
	-Especialistas

*/


/*  ============ INSERCIONES DATOS TABLAS =======================================*/

INSERT INTO "CLINICA".PACIENTE VALUES 
('P-0001', 'DANIEL', 'CARMONA', 'M', '1998-12-07', 'SANTIAGO', 'SANTIAGO CENTRO', '551234567'),
('P-0002', 'JUAN', 'HERNANDEZ', 'M', '1990-07-21', 'ANTOFAGASTA', 'ANTOFAGASTA', '551234321'),
('P-0003', 'FERNANDA', 'MORALES', 'F', '1973-07-01', 'VALPARAISO', 'VALPARAISO', '5412309872'),
('P-0004', 'ANDREA', 'ZUÑIGA', 'F', '2000-12-02', 'VALDIVIA', 'VALDIVIA', '3309876522'),
('P-0005', 'ALBERTO', 'PEREYRA', 'M', '1986-10-23', 'OSORNO', 'OSORNO', '5565423983'),
('P-0006', 'KAREN', 'SOTO', 'F', '1978-07-07', 'SANTIAGO', 'LA FLORIDA', '5565423097'),
('P-0007', 'ANDRES', 'ORTIZ', 'M','1990-10-09', 'COPIAPO', 'COPIAPO', '5698782347'),
('P-0008', 'LESLY', 'RODRIGUEZ', 'F', '2001-02-11', 'LA SERENA', 'LA SERENA', '5543454352'),
('P-0009', 'ENRIQUE', 'VERA', 'F', '1996-11-12', 'VITACURA', 'VITACURA', '3309815273'),
('P-0010', 'VICTORIA', 'SOLIS', 'F', '2002-03-10', 'VITACURA', 'VITACURA', '5565278126');

--INSERTAR DATOS DE ESPECIALISTA

INSERT INTO "CLINICA".ESPECIALISTA VALUES 
('ME-0001', 'SANDRA', 'FLORES', 'F', '1986-01-01', 'MEDICO GENERAL'),
('ME-0002', 'ENRIQUE', 'ORTIZ', 'M', '1968-10-01', 'NEFROLOGIA'),
('ME-0003', 'FELIPE', 'HERNANDEZ', 'M', '1980-10-02', 'MEDICO GENERAL'),
('ME-0004', 'KENIA', 'LOPEZ', 'F', '1973-01-01', 'PEDIATRA'),
('ME-0005', 'JUAN', 'MARTINEZ', 'M', '1980-02-23', 'MEDICO GENERAL');

--INSERTAR DATOS DE CITA

INSERT INTO "CLINICA".CITA VALUES 
('CM-0001', 'P-0001', '2022-10-01', '12:00'),
('CM-0002', 'P-0002', '2022-10-01', '12:20'),
('CM-0003', 'P-0003', '2022-10-02', '12:20'),
('CM-0004', 'P-0004', '2022-10-02', '10:00'),
('CM-0005', 'P-0005', '2022-10-03', '08:20'),
('CM-0006', 'P-0006', '2022-10-03', '12:20'),
('CM-0007', 'P-0007', '2022-10-04', '12:20'),
('CM-0008', 'P-0008', '2022-10-04', '10:00'),
('CM-0009', 'P-0009', '2022-10-04', '08:20'),
('CM-0010', 'P-0010', '2022-10-05', '08:20');

--INSERTAR DATOS DE AGENDAR CITA

INSERT INTO "CLINICA".AGENDAR_CITA VALUES 
('CM-0001', 'ME-0001', 'CONSULTORIO 1', '2022-10-04', '12:00', 'MATUTINO', 'ESPERA', 'NA'),
('CM-0002', 'ME-0001', 'CONSULTORIO 1', '2022-10-04', '12:20', 'MATUTINO', 'ESPERA', 'NA'),
('CM-0003', 'ME-0002', 'CONSULTORIO 2', '2022-10-05', '12:00', 'MATUTINO', 'ESPERA', 'NA'),
('CM-0004', 'ME-0002', 'CONSULTORIO 2', '2022-10-05', '12:00', 'MATUTINO', 'ESPERA', 'NA'),
('CM-0005', 'ME-0003', 'CONSULTORIO 3', '2022-10-06', '12:00', 'MATUTINO', 'ESPERA', 'NA'),
('CM-0006', 'ME-0003', 'CONSULTORIO 3', '2022-10-07', '14:00', 'VESPERTINO', 'ESPERA', 'NA'),
('CM-0007', 'ME-0003', 'CONSULTORIO 3', '2022-10-07', '14:20', 'VESPERTINO', 'ESPERA', 'NA'),
('CM-0008', 'ME-0004', 'CONSULTORIO 4', '2022-10-08', '13:00', 'VESPERTINO', 'ESPERA', 'NA'),
('CM-0009', 'ME-0004', 'CONSULTORIO 4', '2022-10-08', '13:20', 'VESPERTINO', 'ESPERA', 'NA'),
('CM-0010', 'ME-0005', 'CONSULTORIO 5', '2022-10-08', '15:00', 'VESPERTINO', 'ESPERA', 'NA');


--INSERTAR DATOS DE EXPEDIENTE

INSERT INTO "CLINICA".EXPEDIENTE VALUES
('P-0001', 'B POSITIVO', 'NA', 'NA', '2022-06-10'),
('P-0002', 'B NEGATIVO', 'ALERGIA AL POLVO', 'NA', '2022-06-10'),
('P-0003', 'O NEGATIVO', 'NA', 'DIABETES', '2022-06-14'),
('P-0004', 'B POSITIVO', 'ALERGIA A LOS MARISCOS', 'ASMA', '2022-06-15'),
('P-0005', 'B POSITIVO', 'NA', 'DIABETES', '2022-06-16'),
('P-0006', 'B POSITIVO', 'ALERGIA AL POLVO', 'NA', '2022-06-17'),
('P-0007', 'B POSITIVO', 'NA', 'CANCER', '2022-06-20'),
('P-0008', 'B POSITIVO', 'NA', 'NA', '2022-06-24'),
('P-0009', 'B POSITIVO', 'NA', 'NA', '2022-07-02'),
('P-0010', 'B POSITIVO', 'NA', 'NA', '2022-07-06');


--INSERTAR DATOS DE EXPEDIENTE_DIAGNOSTICO
INSERT INTO "CLINICA".EXPEDIENTE_DIAGNOSTICO 
(fk_idespecialista, fk_idpaciente, edad, peso, altura, imc, nivelpeso, presionarterial, diagnostico, recetario, fechacreacion)
VALUES 
('ME-0001', 'P-0001', '24', '70', '1.70', '24.0', 'NORMAL', '120/70', 'NA', 'NA', '2022-11-22'),
('ME-0001', 'P-0002', '33', '80', '1.77', '27.0', 'SOBREPESO', '125/73', 'NA', 'NA', '2022-11-23'),
('ME-0001', 'P-0003', '45', '62', '1.64', '26.6', 'NORMAL', '130/70', 'NA', 'NA', '2022-11-24'),
('ME-0002', 'P-0003', '45', '62', '1.64', '26.6', 'NORMAL', '129/70', 'NA', 'NA', '2022-11-24'),
('ME-0002', 'P-0004', '23', '65', '1.60', '23.0', 'NORMAL', '125/70', 'NA', 'NA', '2022-11-25'),
('ME-0003', 'P-0005', '37', '90', '1.77', '29.0', 'OBESIDAD', '129/80', 'NA', 'NA', '2022-11-25'),
('ME-0003', 'P-0005', '37', '90', '1.77', '29.0', 'OBESIDAD', '128/78', 'NA', 'NA', '2022-11-25'),
('ME-0003', 'P-0006', '46', '72', '1.68', '24.0', 'NORMAL', '120/69', 'NA', 'NA', '2022-11-26'),
('ME-0003', 'P-0007', '31', '76', '1.77', '24.0', 'NORMAL', '125/73', 'NA', 'NA', '2022-11-27'),
('ME-0004', 'P-0007', '31', '76', '1.77', '24.0', 'NORMAL', '125/67', 'NA', 'NA', '2022-11-27'),
('ME-0004', 'P-0008', '21', '68', '1.63', '24.0', 'NORMAL', '119/69', 'NA', 'NA', '2022-11-29'),
('ME-0005', 'P-0009', '26', '90', '1.75', '29.0', 'SOBREPESO', '132/76', 'NA', 'NA', '2022-12-01'),
('ME-0005', 'P-0009', '26', '90', '1.75', '29.0', 'SOBREPESO', '130/74', 'NA', 'NA', '2022-12-01'),
('ME-0005', 'P-0010', '18', '60', '1.59', '23.0', 'NORMAL', '120/68', 'NA', 'NA', '2022-12-02'),
('ME-0005', 'P-0010', '18', '60', '1.59', '23.0', 'NORMAL', '119/65', 'NA', 'NA', '2022-12-02');

--CONSULTAS
SELECT * FROM CLINICA.PACIENTE;
SELECT * FROM CLINICA.ESPECIALISTA;
SELECT * FROM CLINICA.CITA;
SELECT * FROM CLINICA.AGENDAR_CITA;
SELECT * FROM CLINICA.EXPEDIENTE;
SELECT * FROM CLINICA.EXPEDIENTE_DIAGNOSTICO;

/*  ============ ACTUALIZAR Y BORRAR REGISTROS DE UNA TABLA ======================*/

-- MOSTRAR TABLA
SELECT * FROM CLINICA.PACIENTE;

-- MODIFICAR SOLO LA COMUNA Y QUEDARIA TODO COMO ANTOFAGASTA PERO ES INCONSISTENTE
UPDATE CLINICA.PACIENTE SET comuna="ANTOFAGASTA";

-- MODIFICAR EL ESTADO PERO DE UN PK_IDPACIENTES
UPDATE CLINICA.PACIENTE SET comuna="VIÑA DEL MAR" WHERE pk_idPaciente="P-0003";

-- OPERADOR AND - CUMPLE LAS O MAS CONDICIONES
UPDATE CLINICA.PACIENTE SET ciudad="CALAMA" WHERE sexo='M' AND comuna="ANTOFAGASTA";

-- OPERADOR OR - CUMPLE UNA O MAS CONDICIONES
UPDATE CLINICA.PACIENTE SET ciudad="SANTIAGO" WHERE sexo='F' OR comuna="VITACURA"


/*  ============ DELETE BORRAR REGISTROS DE UNA TABLA ==================================*/

DELETE FROM CLINICA.PACIENTE WHERE pk_idPaciente='P-0009';
-- Recuerden que a las tablas no padres o primarias les agregamos.
-- ON UPDATE CASCADE ON DELETE CASCADE , esto nos permite eliminar los registros 
-- De todas las tablas relacionadas.

/*  ============ COMPROBAR QUE EL pk_idPaciente='P-0009' SE ELIMINO ====================*/

SELECT FROM CLINICA.PACIENTE WHERE pk_idPaciente='P-0009';

SELECT FROM CLINICA.EXPEDIENTE WHERE pk_idPaciente='P-0009';
SELECT FROM CLINICA.CITA WHERE pk_idPaciente='P-0009';




/*  ============ CONSULTAS:Where,Funciones de agregación,Having,Limit,Distinct ==================================*/
-- Consulta Normal
SELECT * FROM "CLINICA".PACIENTE;

-- Consulta especificando las columnas
SELECT pk_idPaciente,nombre,apellido FROM CLINICA.PACIENTE;

-- Consulta con condicionales
SELECT * FROM CLINICA.PACIENTE WHERE sexo="M";
SELECT * FROM CLINICA.PACIENTE WHERE ciudad="ANTOFAGASTA";
SELECT * FROM CLINICA.PACIENTE WHERE sexo="M" AND ciudad="OSORNO";
SELECT * FROM CLINICA.PACIENTE WHERE sexo="M" OR ciudad="OSORNO";
SELECT * FROM CLINICA.PACIENTE WHERE sexo="M" OR ciudad="OSORNO";
SELECT * FROM CLINICA.PACIENTE WHERE ciudad IN ('ANTOFAGASTA', 'OSORNO');
SELECT * FROM CLINICA.PACIENTE WHERE ciudad NOT IN ('ANTOFAGASTA', 'OSORNO');

-- Apellidos que terminen con una Z
SELECT * FROM CLINICA.PACIENTE WHERE apellido LIKE '%Z';
-- Ciudad que empiece con una A
SELECT * FROM CLINICA.PACIENTE WHERE ciudad LIKE 'A%';
-- Nombres que tengan una A
SELECT * FROM CLINICA.PACIENTE WHERE ciudad LIKE '%A%';


/*  ============ JOINS ===============  */
/*
	QUE ES UN JOIN?
	Integridad Referencial
	SI Aplicamos un Join a la tabla Paciente y la tabla Expediente
	Estas tiene en común pk_idPacientes

*/

SELECT * FROM "CLINICA".PACIENTE;
SELECT * FROM "CLINICA".ESPECIALISTA;
SELECT * FROM "CLINICA".CITA;
SELECT * FROM "CLINICA".AGENDAR_CITA;
SELECT * FROM "CLINICA".EXPEDIENTE;
SELECT * FROM "CLINICA".EXPEDIENTE_DIAGNOSTICO;

/*
======INNER JOIN=======
Consulta en la cual dos o mas columnas tienen columnas en column.

    SELECT columnas
    FROM A
    INNER JOIN B
    ON A.columna= B.columna


*/

/*======INNER JOIN=======*/
SELECT * FROM "CLINICA".PACIENTE
INNER JOIN "CLINICA".EXPEDIENTE
ON PACIENTE.pk_idPaciente = EXPEDIENTE.pk_idPaciente;

/*======INNER JOIN CONDICION WHERE=======*/
SELECT * FROM "CLINICA".PACIENTE
INNER JOIN "CLINICA".EXPEDIENTE
ON PACIENTE.pk_idPaciente = EXPEDIENTE.pk_idPaciente
WHERE PACIENTE.pk_idPaciente='P-0001';


/*
======LEFT JOIN=======
LEFT JOIN muestra todos los registros de la tabla A
sin importar que no posean una relación con la segunda tabla B

    SELECT columnas
    FROM A
    LEFT JOIN B
    ON A.columna= B.columna


*/

/*======LEFT JOIN=======*/
SELECT * FROM "CLINICA".PACIENTE
LEFT JOIN "CLINICA".EXPEDIENTE
ON PACIENTE.pk_idPaciente = EXPEDIENTE.pk_idPaciente;


/*
======LEFT JOIN Donde una columna en la tabla “B” es null=======
Este tipo de unión nos permite obtener la información de los registros que no se encuentran
en la relación.

    SELECT columnas
    FROM A
    LEFT JOIN B
    ON A.columna= B.columna
    WHERE B.columna IS NULL

*/

/*======LEFT JOIN Donde una columna en la tabla “B” es null=======*/
SELECT * FROM "CLINICA".PACIENTE
FULL OUTER JOIN "CLINICA".EXPEDIENTE
ON PACIENTE.pk_idPaciente = EXPEDIENTE.pk_idPaciente
WHERE EXPEDIENTE.pk_idPaciente is null;

SELECT * FROM "CLINICA".PACIENTE
FULL OUTER JOIN "CLINICA".EXPEDIENTE
ON PACIENTE.pk_idPaciente = EXPEDIENTE.pk_idPaciente
WHERE PACIENTE.pk_idPaciente is null OR EXPEDIENTE.pk_idPaciente is null;


/*
======FULL (OUTER) JOIN=======
Este tipo de unión nos permite obtener todos los registros disponibles en las tablas que
estamos relacionando, sin filtrar la información así como lo puedes inferir

    SELECT columnas
    FROM A
    FULL OUTER JOIN B
    ON A.columna= B.columna
*/

-- FULL OUTER JOIN
SELECT * FROM "CLINICA".PACIENTE
FULL OUTER JOIN "CLINICA".EXPEDIENTE
ON PACIENTE.pk_idPaciente = EXPEDIENTE.pk_idPaciente;

/*
======FULL OUTER JOIN Donde una columna en la tabla “A” y “B” es null=======
FULL OUTER JOIN nos permite conocer aquellos registros que no tienen
en común las tablas que estamos relacionando.

    SELECT columnas
    FROM A
    FULL OUTER JOIN B
    ON A.columna= B.columna
*/

SELECT * FROM "CLINICA".PACIENTE
FULL OUTER JOIN "CLINICA".EXPEDIENTE
ON PACIENTE.pk_idPaciente = EXPEDIENTE.pk_idPaciente
WHERE PACIENTE.pk_idPaciente is null OR EXPEDIENTE.pk_idPaciente is null;






























