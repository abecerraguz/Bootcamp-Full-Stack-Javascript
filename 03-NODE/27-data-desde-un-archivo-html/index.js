const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", "utf8", (err, data) => {
        res.end(data);
    });
}).listen(3000, () => console.log("Servidor encendido"));
