# Pasos para instalar babel

1. Tener instalado NodeJS.
1. Verificar en el terminal si quedo instalado la versión `node -v`.
1. Verificar en el terminal si quedo instalado npm `npm -v`.
1. Crear una carpeta con `mkdir fullstack-entorno`.
1. Entrar a la carpeta `cd fullstack-entorno`.
1. Iniciar node 
  1. `npm init -y` , rellena la configuración del proyecto por default.
  1. `npm init`, te pregunta la configuración del proyecto y finalmente se crea el archivo `package.json`.

```Json

  {
    "name": "fullstack-entorno",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }

```
1. Luego hacemos la instalación de la dependencia de `babel`, en la terminal escribimos.

```node

    npm i -D @babel/preset-env @babel/cli @babel/core @babel/polyfill
    npm i core-js

```

1. Crear el archivo `babel.config.json` y dejar el sgte codigo:

```Json
{
    "presets": [
        [
            "@babel/env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1"
                },
                "useBuiltIns": "usage",
                "corejs": "3.6.4",
                "forceAllTransforms": true
            }
        ]
    ]
}
```

1. Escribir en la terminal.

```
  npx babel src/ -d dist/ --config-file ./babel.config.json

```





