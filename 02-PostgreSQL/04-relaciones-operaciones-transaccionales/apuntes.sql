CREATE TABLE autos (
    id SERIAL NOT NULL,
    marca VARCHAR(20) NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    año INT NOT NULL,
    color VARCHAR(20) NOT NULL,
    precio INT NOT NULL,
    stock INT CHECK( stock >=0 ),
	PRIMARY KEY (id)
);


CREATE TABLE ventas (
    fecha DATE NOT NULL,
    id_auto smallint,
    cliente VARCHAR(100) NOT NULL,
    referencia BIGINT NOT NULL,
    cantidad BIGINT,
    metodo_pago VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_auto) REFERENCES autos(id)
);

\copy autos FROM '/Users/abecerraguz/Desktop/autos.csv' csv header;
\copy ventas FROM '/Users/abecerraguz/Desktop/ventas.csv' csv header;

/*
Ejercicio propuesto (1)
La empresa Mawashi Cars Spa ha detectado un problema con el sistema que permite
registrar ventas de los autos que no tienen stock y ha provocado incomodidades con los
clientes, por lo que necesita urgentemente que se arregle este error y evitar futuras ventas
en donde no se tenga disponibilidad del auto que se quiera vender. En el apoyo lectura de
esta sesión encontrarás 2 archivos llamados autos.csv y ventas.csv para el desarrollo de
este ejercicio propuesto.

Para empezar con las soluciones debes crear las tablas correspondientes a los archivos .csv
deduciendo el tipo de dato de cada columna, definiendo la llave primaria y foránea
correspondiente en las tablas, además de agregarle el comando CHECK a la columna stock
en la tabla autos.

Realizar una transacción que incluya la inserción de un registro en la tabla “ventas” del auto
con id 5 y una actualización en la tabla “autos” que reste 1 al stock de dicho auto.

*/


ALTER TABLE autos ADD COLUMN STOCK CHECK ( VALUE INT );

BEGIN TRANSACTION;
INSERT INTO ventas (fecha, id_auto, cliente, referencia, cantidad,
metodo_pago) values ('2020-02-02', 5 , 'Diana Palma', 40302, 2000000, 'credito');
UPDATE autos SET stock = stock - 1 WHERE id = 5;
COMMIT;


/*
    Ejercicio propuesto (2)
    Continuando con el ejercicio propuesto de Mawashi Cars, realiza otra transacción en donde
    insertes registros en la tabla ventas pero ahora con los autos de id 2, 3 y 5. Considera que
    alguno de estos autos podría no tener stock por lo que deberás realizar un rollback al recibir
    el error por consola y confirmar que los cambios no fueron realizados consultando ambas
    tablas.
*/
BEGIN TRANSACTION;

INSERT INTO ventas (fecha, id_auto, cliente, referencia, cantidad, metodo_pago) 
values ('2020-02-03', 2 , 'Maria Urbaez', 23302, 2000000,'debito');
UPDATE autos SET stock = stock - 1 WHERE id = 2;

INSERT INTO ventas (fecha, id_auto, cliente, referencia, cantidad,metodo_pago) 
values ('2020-02-04', 3 , 'Chary Malave', 43302, 1200000, 'credito');
UPDATE autos SET stock = stock - 1 WHERE id = 3;


INSERT INTO ventas (fecha, id_auto, cliente, referencia, cantidad,metodo_pago) 
values ('2020-02-05', 5 , 'Diana Palma', 12302, 50000000,'credito');
UPDATE autos SET stock = stock - 1 WHERE id = 5;
ROLLBACK;


SELECT * FROM autos;
SELECT * FROM ventas;


/*

Realizar una nueva transacción intentando volver a registrar las ventas de los autos
de id 2, 3 y 5, pero para evitar que no se realice ningún cambio crea un punto de
guardado por cada auto que no arroje un error en su actualización de stock y si
recibes algún error realiza un ROLLBACK a último SAVEPOINT. Posteriormente revisa
ambas tablas para verificar que se realizaron los cambios correspondientes.

*/

BEGIN TRANSACTION;
INSERT INTO ventas (fecha, id_auto, cliente, referencia, cantidad, metodo_pago) 
values ('2020-02-03', 2 , 'Maria Urbaez', 23302, 2000000, 'debito');
UPDATE autos SET stock = stock - 1 WHERE id = 2;
SAVEPOINT checkpoint1;

INSERT INTO ventas (fecha, id_auto, cliente, referencia, cantidad,metodo_pago) 
values ('2020-02-04', 3 , 'Chary Malave', 43302, 1200000,'credito');
UPDATE autos SET stock = stock - 1 WHERE id = 3;
SAVEPOINT checkpoint2;

INSERT INTO ventas (fecha, id_auto, cliente, referencia, cantidad,metodo_pago) 
values ('2020-02-05', 5 , 'Diana Palma', 12302, 50000000,'credito');
UPDATE autos SET stock = stock - 1 WHERE id = 5;
ROLLBACK TO checkpoint2;
COMMIT;

SELECT * FROM ventas;
SELECT * FROM autos;
