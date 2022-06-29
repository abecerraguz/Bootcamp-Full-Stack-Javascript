const http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <img width="600"
        src="https://sialdeporte.com/wp-content/uploads/2018/02/taekwondo-2.jpg"
        />`);
}).listen(3000, () => console.log("Servidor encendido"));
