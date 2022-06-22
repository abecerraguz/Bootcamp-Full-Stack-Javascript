CREATE TABLE cuentas (
    numero_cuenta INT NOT NULL UNIQUE PRIMARY KEY,
    balance DECIMAL CHECK (balance >= 0.00)
    -- check valida la condición que el monto sea mayor a cero
);

INSERT INTO cuentas (numero_cuenta, balance) VALUES (1, 1000);
INSERT INTO cuentas (numero_cuenta, balance) VALUES (2, 1000);

SELECT * FROM CUENTAS;

BEGIN TRANSACTION;
UPDATE cuentas SET balance = balance - 1000 WHERE numero_cuenta = 1;
UPDATE cuentas SET balance = balance + 1000 WHERE numero_cuenta = 2;
COMMIT;

BEGIN TRANSACTION;
UPDATE cuentas SET balance = balance + 1000 WHERE numero_cuenta = 2;
UPDATE cuentas SET balance = balance - 1000 WHERE numero_cuenta = 1;
ROLLBACK;

/*
    Si por alguna razón, en medio de una transacción se decide que ya no se quiere registrar los
    cambios (tal vez nos dimos cuenta que estamos actualizando todos los registros de nuestra
    base y no es lo que buscábamos), se puede recurrir a la orden ROLLBACK en lugar de
    COMMIT y todas las actualizaciones hasta ese punto quedarán canceladas.
*/


BEGIN TRANSACTION;
INSERT INTO cuentas(numero_cuenta, balance) VALUES (3,
5000);
SAVEPOINT nueva_cuenta;


UPDATE cuentas SET balance = balance + 3000 WHERE numero_cuenta = 3;
UPDATE cuentas SET balance = balance - 3000 WHERE numero_cuenta = 2;
-- Justo acá deberás recibir un error
ROLLBACK TO nueva_cuenta;
COMMIT;

