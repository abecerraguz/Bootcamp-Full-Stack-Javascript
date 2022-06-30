// Paso 1
const Jimp = require("jimp");
// Paso 2
const http = require("http");

// Paso 3
const fs = require("fs");

// Paso 4
http.createServer((req, res) => {
    // Paso 5
    Jimp.read("https://miviaje.com/wp-content/uploads/2016/05/shutterstock_337174700.jpg", (err, imagen) => {
        // Paso 6
        imagen
            .resize(600, Jimp.AUTO)
            // .sepia()
            .writeAsync("newImg.png")
            .then(() => {
                // Paso 7
                fs.readFile("newImg.png", (err, Imagen) => {
                    // Paso 8
                    res.writeHead(200, { "Content-Type": "image/png" });
                    res.end(Imagen);
                });
            });
    });
}).listen(3000, () => console.log("Server on"));
