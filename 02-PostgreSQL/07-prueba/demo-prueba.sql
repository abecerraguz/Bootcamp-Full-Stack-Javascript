
-- Creación de las tablas
CREATE TABLE clientes(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    rut VARCHAR(12),
    direccion VARCHAR(50)
);

CREATE TABLE categorias(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(50)
);

CREATE TABLE productos(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(50),
    valor FLOAT,
    stock INT CHECK (stock >= 0),
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categorias (id)
);

CREATE TABLE facturas(
    id SERIAL PRIMARY KEY,
    fecha DATE,
    subtotal FLOAT,
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES clientes (id)
);

CREATE TABLE producto_factura(
    id_producto INT,
    id_factura INT,
    cantidad INT,
    FOREIGN KEY (id_producto) REFERENCES productos (id),
    FOREIGN KEY (id_factura) REFERENCES facturas (id)
);

-- Ingreso de 3 clientes
INSERT INTO clientes (nombre, rut, direccion) VALUES ('Jocelyn','22.465.748-7','direccion 1');
INSERT INTO clientes (nombre, rut, direccion) VALUES ('Diego','20.785.123-4','direccion 3');
INSERT INTO clientes (nombre, rut, direccion) VALUES ('Ignacia','26.852.741-3','direccion 2');

-- Ingreso de categorías
INSERT INTO categorias (nombre, descripcion) VALUES ('Computadoras','descripcion categoria 1');
INSERT INTO categorias (nombre, descripcion) VALUES ('Audio y Video','descripcion categoria 2');


-- Cinco productos
INSERT INTO productos (nombre, descripcion, valor, stock, id_categoria)
VALUES ('Mouse', ' descripcion producto 1', 15, 10, 1);

INSERT INTO productos (nombre, descripcion, valor, stock, id_categoria)
VALUES ('Teclado', ' descripcion producto 2', 30, 10, 1);

INSERT INTO productos (nombre, descripcion, valor, stock, id_categoria)
VALUES ('Monitor', ' descripcion producto 3', 80, 10, 1);

INSERT INTO productos (nombre, descripcion, valor, stock, id_categoria)
VALUES ('Audifonos', ' descripcion producto 4', 50, 10, 2);

INSERT INTO productos (nombre, descripcion, valor, stock, id_categoria)
VALUES ('Cable HDMI', ' descripcion producto 5', 10, 10, 2);

-- Ingreso de las facturas
BEGIN;
    INSERT INTO facturas (id_cliente, fecha) VALUES (1, '2020-07-28');
    INSERT INTO producto_factura (id_producto, id_factura, cantidad) VALUES
    (1, 1, 1);
    INSERT INTO producto_factura (id_producto, id_factura, cantidad) VALUES
    (2, 1, 3);
    INSERT INTO producto_factura (id_producto, id_factura, cantidad) VALUES
    (3, 1, 2);

    UPDATE facturas SET subtotal = 265 WHERE id = 1;
    UPDATE productos SET stock = stock - 1 WHERE id = 1;
    UPDATE productos SET stock = stock - 3 WHERE id = 2;
    UPDATE productos SET stock = stock - 2 WHERE id = 3;
COMMIT;

BEGIN;
    INSERT INTO facturas (id_cliente, fecha) VALUES (2, '2020-11-04');
    INSERT INTO producto_factura (id_producto, id_factura, cantidad) VALUES
    (4, 2, 1);
    INSERT INTO producto_factura (id_producto, id_factura, cantidad) VALUES
    (5, 2, 1);
    UPDATE facturas SET subtotal = 60 WHERE id = 2;
    UPDATE productos SET stock = stock - 1 WHERE id = 4;
    UPDATE productos SET stock = stock - 1 WHERE id = 5;
COMMIT;

BEGIN;
    INSERT INTO facturas (id_cliente, fecha) VALUES (3, '2020-12-12');
    INSERT INTO producto_factura (id_producto, id_factura, cantidad) VALUES
    (5, 3, 8);
    UPDATE facturas SET subtotal = 80 WHERE id = 3;
    UPDATE productos SET stock = stock - 8 WHERE id = 5;
COMMIT;

-- ¿Cuál es el nombre del cliente que realizó la compra más cara?
-- Subquery, selecciona la columna "id_cliente" desde la tabla "facturas" y hace un orden de la columna subtotal de forma desendente y limita 1
select nombre from clientes where id IN ( select id_cliente from facturas
order by subtotal desc limit 1 );

-- ¿Cuáles son los nombres de los clientes que pagaron más de 60$? Considere un IVA
-- del 19%
select nombre from clientes where id IN ( select id_cliente from facturas
where subtotal > 60 * 1.19);

-- ¿Cuántos clientes han comprado más de 5 productos? Considere la cantidad por
-- producto comprado

select COUNT(nombre) from clientes where id IN
(select id_cliente from facturas where id IN
(select id_factura from
(select SUM(cantidad) as cantidad_productos, id_factura from
producto_factura GROUP BY id_factura) as cant_prod_table
where cantidad_productos > 5));

-- Otra forma
SELECT CLIENTES.nombre, SUM( PRODUCTO_FACTURA.cantidad ) as productos_comprados  FROM CLIENTES
INNER JOIN FACTURAS
ON CLIENTES.id = FACTURAS.id_cliente
INNER JOIN PRODUCTO_FACTURA
ON PRODUCTO_FACTURA.id_factura = FACTURAS.id
GROUP BY CLIENTES.nombre
having SUM( PRODUCTO_FACTURA.cantidad ) > 5;


