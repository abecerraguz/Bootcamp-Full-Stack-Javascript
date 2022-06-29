const http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <p> Desafio <b>LATAM</b> </p>
    `);
}).listen(3000, () => console.log("Servidor encendido"));