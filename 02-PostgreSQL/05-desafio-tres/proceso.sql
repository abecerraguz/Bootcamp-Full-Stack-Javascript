-- Requerimiento 1
-- Cargar el respaldo de la base de datos unidad2.sql
psql -U postgres unidad2 < /Users/abecerraguz/Desktop/02-PostgreSQL/05-desafio-tres/unidad2.sql


-- Requerimiento 2
/*
    El cliente usuario01 ha realizado la siguiente compra:
        ● producto: producto9.
        ● cantidad: 5.
        ● fecha: fecha del sistema.
    Mediante el uso de transacciones, realiza las consultas correspondientes para este
    requerimiento y luego consulta la tabla producto para validar si fue efectivamente
    descontado en el stock. (3 Puntos)
*/
BEGIN TRANSACTION ;
INSERT INTO compra (cliente_id, fecha) values (1, now ());
INSERT INTO detalle_compra (producto_id, compra_id, cantidad) values ( 9 , ( SELECT max (id) FROM compra) , 5 );
UPDATE producto SET stock = stock -5 WHERE producto.id = 9 ;
COMMIT ;
SELECT * FROM producto

-- Requerimiento 3
/*

    El cliente usuario02 ha realizado la siguiente compra:
        ● producto: producto1, producto 2, producto 8.
        ● cantidad: 3 de cada producto.
        ● fecha: fecha del sistema.

    Mediante el uso de transacciones, realiza las consultas correspondientes para este
    requerimiento y luego consulta la tabla producto para validar que si alguno de ellos
    se queda sin stock, no se realice la compra. (3 Puntos)

*/
BEGIN TRANSACTION ;
INSERT INTO compra (cliente_id, fecha) values (2, now ());
INSERT INTO detalle_compra (producto_id, compra_id, cantidad) values ( 1 , ( SELECT max (id) FROM compra) , 3 );
UPDATE producto p SET stock = stock -3 WHERE p.id = 1 ;
INSERT INTO detalle_compra (producto_id, compra_id, cantidad) values ( 2 , ( SELECT max (id) FROM compra) , 3 );
UPDATE producto p SET stock = stock -3 WHERE p.id = 2 ;
INSERT INTO detalle_compra (producto_id, compra_id, cantidad) values ( 8 , ( SELECT max (id) FROM compra) , 3 );
UPDATE producto p SET stock = stock -3 WHERE p.id = 8 ;
COMMIT ;
SELECT * FROM producto;

-- Requerimiento 4
/*

    Realizar las siguientes consultas (2 Puntos):
        a. Deshabilitar el AUTOCOMMIT .
        b. Insertar un nuevo cliente.
        c. Confirmar que fue agregado en la tabla cliente.
        d. Realizar un ROLLBACK.
        e. Confirmar que se restauró la información, sin considerar la inserción del punto b.
        f. Habilitar de nuevo el AUTOCOMMIT.

*/

\set AUTOCOMMIT off
INSERT INTO cliente(nombre, email) VALUES ( 'usuario11' ,'usuario11@gmail.com' );
SELECT * FROM cliente ;
ROLLBACK ;
SELECT * FROM cliente ;
\set AUTOCOMMIT on

