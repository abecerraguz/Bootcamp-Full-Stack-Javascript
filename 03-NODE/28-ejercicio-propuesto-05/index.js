const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    res.writeHead(200, { 
        "Content-Type": "text/html"
        // 'charset':'UTF-8'
    });
    fs.readFile("Alerta.html", "utf8", (err, html) => {
        res.end(html);
    });
}).listen(3000, () => console.log("Servidor encendido"));
