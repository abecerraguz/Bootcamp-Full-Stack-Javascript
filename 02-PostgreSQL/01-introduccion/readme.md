# CREAR UNA BASE DE DATOS

## CREAR USUARIO

```sql

CREATE USER nombre_usuario;

```

## CREAR BD

```sql

CREATE DATABASE bd_taller

```

## Mostrar todas las bases de datos

```sql

\list

```

## Mostrar todos los usuarios

```sql

\du

```

## Donde algunos de los comandos posibles son:

```sql

    PASSWORD -- Asigna una contraseña al usuario creado.
    ENCRYPTED PASSWORD -- Le asigna una contraseña encriptada al usuario creado
    UNENCRYPTED PASSWORD -- Le asigna una contraseña no encriptada al usuario creado.
    VALID UNTIL -- La cuenta expirará en la fecha indicada.
    CREATEDB -- Permite al usuario crear bases de datos.
    NOCREATEDB: --No permite al usuario crear bases de datos.
    SUPERUSER --Puede crear otros usuarios (volveremos a ver esto más adelante).
    NOSUPERUSER --No puede crear otros usuarios.

```

## Ejemplo usuario con comado especial

```sql

CREATE USER Bastian WITH SUPERUSER PASSWORD  'contraseña_secreta' VALID UNTIL '2022-12-31';

```




