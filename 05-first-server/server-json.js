// importamos el module http de node
const http = require('http');

// recibe un requestListener
const server = http.createServer((request, response) => {
    if(request.method === 'GET' && request.url === '/koders'){
        response.writeHead(200, {"Content-Type": "application/json"})
        const mensaje = { "message": "Aquí se obtendrán los koders"}
        let mensajeJON = JSON.stringify(mensaje)
        response.end(mensajeJON)
    } else {
        response.write('No hay nada')
    }
     // cerramos la respuesta
})

server.listen(8080, () =>{
    console.log('Server listening on port 8080');
})