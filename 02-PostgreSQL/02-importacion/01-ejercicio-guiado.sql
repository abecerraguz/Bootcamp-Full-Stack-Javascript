-- PASO 1
-- CREAR `LA BASE DE DATOS
CREATE DATABASE pokemon;

-- PASO 2
\c pokemon

-- PASO 3
-- CREAMOS LAS TABLAS 
-- TABLA 1 Pokemones
-- TABLA 2 mis_pokemones


CREATE TABLE Pokemones(
    pokedex INT,
    nombre VARCHAR(10),
    tipo1 VARCHAR(10),
    tipo2 VARCHAR(10),
    PRIMARY KEY(pokedex)
);

CREATE TABLE mis_pokemones(
    pokedex INT,
    fecha_captura DATE,
    lugar VARCHAR(20),
    huevo BOOLEAN,
    peso float,
    estatura float,
    FOREIGN KEY (pokedex) REFERENCES
    pokemones(pokedex)
);

\copy pokemones FROM '/Users/abecerraguz/Desktop/directorio/pokemonesKanto.csv' csv header;
\copy mis_pokemones FROM '/Users/abecerraguz/Desktop/directorio/mis_pokemones.csv' csv header;


-- EJERCICIO UNO
/*
    Ejercicio propuesto (1)
    Utilizar el mismo ejercicio de esta lectura pero realiza las siguientes consultas:
    a. Listar los pokemones cuya columna pokédex sea mayor a 50.
    b. Listar pokemones de tipo psíquico.
    c. Listar los primeros 22 registros de la tabla pokemones.
*/

SELECT * FROM pokemones  WHERE pokedex > 50;
SELECT * FROM pokemones where tipo1='psiquico';
SELECT * FROM pokemones WHERE LIMIT 22;

/*
    Ejercicio propuesto (2)
    Realizar una consulta a la tabla pokemones donde la columna nombre tenga un alias
    “pokename” y pokédex tenga el alias “nro_pokedex”. La consulta debe obtener como límite
    30 registros.

    SELECT
    pkm.nombre as pokename,
    pkm.pokedex as nro_pokedex
    FROM pokemones as pkm LIMIT 30;

*/

SELECT
pkm.nombre as pokename,
pkm.pokedex as nro_pokedex
FROM pokemones as pkm LIMIT 30;

/*
    Ejercicio propuesto (3)
    Realizar una consulta para saber cuántos registros se tienen en la tabla pokemones. Ocupa
    el comando COUNT para esto.
    Para nuestro ejemplo si queremos mostrar la columna nombre y el largo del nombre de los
    primeros 10 pokemones, podemos hacer la siguiente consulta:.
*/

SELECT nombre,LENGTH(nombre)
-- y le asignaremos el nombre largo_de_nombre
AS largo_del_nombre
-- de la tabla pokemones
FROM pokemones LIMIT 10;

/*
Ejercicio propuesto (3)
Realizar una consulta para saber cuántos registros se tienen en la tabla pokemones. Ocupa
el comando COUNT para esto.
Para nuestro ejemplo si queremos mostrar la columna nombre y el largo del nombre de los
primeros 10 pokemones, podemos hacer la siguiente consulta:

*/

SELECT 
COUNT(*)
FROM pokemones;

SELECT nombre,LENGTH(nombre)
-- y le asignaremos el nombre largo_de_nombre
AS largo_del_nombre
-- de la tabla pokemones
FROM pokemones LIMIT 10;


SELECT SUM(LENGTH(nombre))
-- y le asignaremos el nombre suma_de_nombres
AS suma_de_nombres
-- de la tabla pokemones
FROM pokemones WHERE pokedex <= 10;




SELECT COUNT ( pokedex ) AS totalHoy
FROM pokemones
WHERE tipo1='agua' OR tipo2='agua';


SELECT * FROM pokemones WHERE tipo1='agua' OR tipo2='agua';


/*
Ejercicio propuesto (4)
Realizar una consulta para saber cuántos pokemones tienen como segundo tipo, el tipo roca
en la tabla pokemones.

*/

SELECT COUNT ( pokedex ) AS total
FROM pokemones
WHERE tipo2='roca';

SELECT * FROM pokemones WHERE tipo2='roca';



SELECT tipo1, COUNT(*)
FROM pokemones GROUP BY tipo1;

SELECT tipo2, COUNT(*)
FROM pokemones GROUP BY tipo2;

SELECT *
FROM pokemones
ORDER BY nombre ASC;


/*
Ejercicio propuesto (6)
Realizar una consulta a la tabla pokemones para obtener los pokemones ordenados según
su id de pokédex de forma descendente.
*/

SELECT *
FROM pokemones
ORDER BY pokedex DESC;

-- Crear indice 
CREATE INDEX index_pokemon_nombre on pokemones(nombre);

-- Si queremos saber qué columnas de nuestras tablas tienen índice, podemos usar el
-- siguiente comando:
SELECT * FROM pg_indexes WHERE tablename = nombre_tabla;

SELECT * FROM pg_indexes WHERE tablename = 'pokemones';

/*
    Eliminando índices
    Si queremos eliminar un índice, basta con ejecutar el comando:
    drop index nombre_indice;
*/
drop index index_pokemon_nombre;
-- CONFORMAR SI SE ELIMINO EL INDEX
SELECT * FROM pg_indexes WHERE tablename = "pokemones";


SELECT 
a.marca AS mar, 
a.modelo AS mod, 
a.color AS c
FROM autos AS a;



