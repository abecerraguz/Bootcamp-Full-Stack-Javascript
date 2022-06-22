-- PASO 1
-- Crear una base de datos con nombre “Posts”. (1 Punto)
CREATE DATABASE posts;

-- PASO 2
-- Cambiarnos a la Base de datos "posts"
\c posts

-- PASO 3
-- 2. Crear una tabla “post”, con los atributos id, nombre de usuario, fecha de creación, contenido y descripción. (1 Punto)
CREATE TABLE post(
    id SERIAL,
    nombre VARCHAR(15),
    fecha_creacion DATE,
    contenido VARCHAR(255),
    descripcion VARCHAR(255),
    PRIMARY KEY (id)
);

-- PASO 4
--Insertar 3 post, 2 para el usuario "Pamela" y uno para "Carlos". (0.6 Puntos)
INSERT INTO post (nombre,fecha_creacion,contenido,descripcion)
VALUES ('Pamela','04-06-2022','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Inicio Algoritmos I');

INSERT INTO post (nombre,fecha_creacion,contenido,descripcion)
VALUES ('Pamela','03-06-2022','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Inicio Algoritmos II');

INSERT INTO post (nombre,fecha_creacion,contenido,descripcion)
VALUES ('Carlos','02-06-2022','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Introducción a la Fisica');

-- PASO 5
-- Modificar la tabla post, agregando la columna título. (1 Punto)
ALTER TABLE post ADD titulo VARCHAR(30);

-- PASO 6
-- Agregar título a las publicaciones ya ingresadas. (1 Punto)
UPDATE post SET titulo='Programacion I' WHERE id=1;
UPDATE post SET titulo='Programacion II' WHERE id=2;
UPDATE post SET titulo='Física optica' WHERE id=3;

-- PASO 7 
-- Insertar 2 post para el usuario "Pedro". (0.4 Puntos)

INSERT INTO post (nombre,fecha_creacion,contenido,descripcion,titulo)
VALUES ('Pedro','05-06-2022','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Derivadas','Calculo I');

INSERT INTO post (nombre,fecha_creacion,contenido,descripcion,titulo)
VALUES ('Pedro','06-06-2022','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Integrales', 'Calculo II');

-- PASO 8 
-- Eliminar el post de Carlos. (1 Punto)
DELETE FROM post WHERE nombre='Carlos';

-- PASO 9 
-- Ingresar un nuevo post para el usuario "Carlos". (0.6 Puntos)
INSERT INTO post (nombre,fecha_creacion,contenido,descripcion,titulo)
VALUES ('Carlos','03-06-2022','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CSS Avanzado','SASS');


-- PARTE DOS
-- 1 Crear una nueva tabla llamada “comentarios”, con los atributos id, fecha, hora de creación y contenido, que se relacione con la tabla posts. (1 Punto)
CREATE TABLE comentario(
    id_comentario SERIAL,
    id_cometario_post INT,
    fecha_hora_creacion TIMESTAMP,
    contenido VARCHAR(255),
    FOREIGN KEY (id_cometario_post) REFERENCES post (id)
);
-- 2 Crear 2 comentarios para el post de "Pamela" y 4 para "Carlos". (0.4 Puntos)
INSERT INTO comentario (id_comentario,fecha_hora_creacion,contenido)
VALUES (6, '04-05-2022 11:04:30','Excelente Contenido de CSS!!');

INSERT INTO comentario (id_comentario,fecha_hora_creacion,contenido)
VALUES (6, '04-05-2022 11:04:30','Se debe profundizar mas en CSS!!');

INSERT INTO comentario (id_comentario,fecha_hora_creacion,contenido)
VALUES (2, '04-05-2022 11:04:30','Interesante plateamineto de Algoritmo!!');

INSERT INTO comentario (id_comentario,fecha_hora_creacion,contenido)
VALUES (2, '04-05-2022 11:04:30','Buena solución !!');

INSERT INTO comentario (id_comentario,fecha_hora_creacion,contenido)
VALUES (2, '04-05-2022 11:04:30','Excelente Contenido!!');

INSERT INTO comentario (id_comentario,fecha_hora_creacion,contenido)
VALUES (2, '04-05-2022 11:04:30','Esperaba más!!');

-- 3 Crear un nuevo post para "Margarita". (1 Punto);
INSERT INTO post (nombre,fecha_creacion,contenido,descripcion,titulo)
VALUES ('Margarita','06-06-2022','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Reciclando Plastico', 'Medio Ambiente');

-- 4 Ingresar 5 comentarios para el post de Margarita. (1 Punto)


