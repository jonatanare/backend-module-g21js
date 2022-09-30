/**
 * ! Promise: Un objeto que representa el resultado de una ejecución asyn
 */

// constructor
// new Promise()
// Recibe una función como parametro (callback)

new Promise((resolve, reject) => {
    if('todo cool!!') resolve('Todo excelente!!');
    if('hay un Error') reject('Paso algo D:');
})

/*
    resolve(Es una función) -> Al invocarla se cambiará el estado de la promesa a resolved
    reject(Es una función) -> Al invocarla se cambiará el estado de la promesa a rejected
*/

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = null;
        if(error) {
            reject('Ocurrio un Error')
        }
        resolve('Todo cool!! D:')
    }, 2000);
})

console.log(myFirstPromise);

myFirstPromise
    .then((result) => {
        console.log('result: ', result);
    })
    .catch((error) => {
        console.log('Error: ', error);
    })

/*
    .then(() => {}) // -> Maneja la promesa cuando haya sido exitosa
        - Recibe un callback
        - Regresar lo que se pasa en la función resolve()
    .catch(() => {}) // -> Maneja la promesa cuando haya sido rechazada
        - Recibe un callback
        - Regresar lo que se pasa en la función reject()
*/

function algoAsincrono() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = null;
            if(error) {
                reject('Hubo un error, ayuda')
            }
            resolve('Todo cool!!')
        }, 1000);
    })
}

algoAsincrono()
    .then((result) => {
        console.log('Result: ', result);
    }) // exitosa
    .catch((error) => {
        console.error('Error: ', error);
    }) // rechazada