CREATE DATABASE pizzeria
    WITH
    OWNER = abecerraguz
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;



CREATE TABLE pizzas(
    id INT,
    stock INT CHECK (stock >= 0.00),
    costo DECIMAL,
    nombre VARCHAR(25),
    PRIMARY KEY(id)
);


CREATE TABLE ventas (
    cliente VARCHAR(60),
    pizza INT,
    fecha DATE,
    monto DECIMAL,
    FOREIGN KEY (pizza) REFERENCES pizzas(id)
);

INSERT INTO pizzas (id, stock, costo, nombre) VALUES (1, 0, 12000, 'Suprema Pizza 1');

BEGIN;
    INSERT INTO pizzas (id, stock, costo, nombre) VALUES (2, 2, 15000, 'Suprema Pizza 2');
COMMIT;


BEGIN;
    INSERT INTO ventas (cliente, fecha, monto, pizza) VALUES ('Alejandro Becerra', '2022-22-02', 12000, 1);
    UPDATE pizzas SET stock = stock - 1 WHERE id = 1;
COMMIT;


BEGIN;
    INSERT INTO ventas (cliente, fecha, monto, pizza) VALUES ('Roberto Fernandez', '2022-05-22', 15000, 2);
    UPDATE pizzas SET stock = stock - 1 WHERE id = 2;
    SAVEPOINT checkpoint;

    INSERT INTO ventas (cliente, fecha, monto, pizza) VALUES ('Utonio Ramirez', '2022-05-22', 12000, 1);
    UPDATE pizzas SET stock = stock - 1 WHERE id = 1;
ROLLBACK TO checkpoint;


pg_dump -U abecerraguz pizzeria > pizzeria.sql

pg_dump -U postgres -W -h localhost pizzeria > pizzeria.sql