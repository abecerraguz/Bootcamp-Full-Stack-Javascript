-- PASO 1, Creamos la Base de datos
CREATE DATABASE "Peliculas"
    WITH
    OWNER = abecerraguz
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;


CREATE SCHEMA PELICULAS AUTHORIZATION postgres;

DROP SCHEMA PUBLIC;

-- PASO 2, Creamos la tabla peliculas
CREATE TABLE "Cine".peliculas (
	pk_idPeliculas INT NOT NULL,
	pelicula VARCHAR(60) NOT NULL,
	fecha_estreno INT NOT NULL,
	director VARCHAR(30) NOT NULL,
	PRIMARY KEY (pk_idPeliculas)
);

CREATE TABLE "Cine".reparto(
	id_Pelicula INT NOT NULL,
	nombre VARCHAR(30) NOT NULL,
	FOREIGN KEY (id_pelicula) REFERENCES "Cine".peliculas(pk_idPeliculas)
);

\copy "Cine".peliculas FROM '/Users/abecerraguz/Desktop/02-PostgreSQL/02-importacion/CSV/peliculas.csv' csv header;
\copy "Cine".reparto FROM '/Users/abecerraguz/Desktop/02-PostgreSQL/02-importacion/CSV/reparto.csv' csv header;

-- Listar todos los actores que aparecen en la película "Titanic"
select * from "Cine".reparto where id_pelicula=2;

-- Consultar en cuántas películas del top 100 participa Harrison Ford.
select count(id_pelicula) from "Cine".reparto where nombre = 'Harrison Ford';

-- Indicar las películas estrenadas entre los años 1990 y 1999 ordenadas por título de manera ascendente.
select * from "Cine".peliculas where fecha_estreno between 1990 and 1999 order by pelicula ASC;

-- Hacer una consulta SQL que agrupe los títulos con su longitud, la longitud debe ser nombrado para la consulta como “longitud_titulo”
select pelicula, LENGTH(pelicula) as longitud_titulo from "Cine".peliculas group by pelicula;

-- Consultar cuál es la longitud más grande entre todos los títulos de las películas.
select MAX(LENGTH(pelicula)) from "Cine".peliculas;


\copy "public".autos FROM '/Users/abecerraguz/Desktop/autos.csv' csv header;
