// importamos el module http de node
const http = require('http');

// recibe un requestListener
const server = http.createServer((request, response) => {

    const url = request.url;
    const method = request.method;
    if(url === '/koders' && method === 'GET'){
        response.write('Aquí estan todos los koders');
    } else if(url === '/koders' && method === 'POST') {
        response.write('Aqui puedes crear un koder');
    } else {
        response.write('No conozco esta solicitud');
    }
    console.log(method);
    //response.write('Hola desde mi servidor en node D:');
    response.end() // cerramos la respuesta
})

server.listen(8080, () =>{
    console.log('Server listening on port 8080');
})

/**
 * TODO: Reaccionar a las siguientes rutas:
 * ! GET /koders -> aquí estarán todos los koders
 * ! POST /koders -> aquí puedes crear un koder
 * ! X /x -> No conozco esta solicitud
 */