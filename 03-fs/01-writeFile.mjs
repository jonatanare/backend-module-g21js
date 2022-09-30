/**
 * TODO: A partir de archivo koders.json, realizar las siguientes acciones: 
 * ! 1° Crear una función que permita leer el archivo e imprimir en consola el arreglo de Koders
 * ! 2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
 * ! 3º Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
 * ! 4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
 * ! 5º Crear una función que permita obtener a los koders que sean mayores a 25 años
 */

import fs from 'fs'

// function readFile(path = './koders.json', callback) {
//     console.log("Imprimiendo el arreglo: ");
//     callback()
// }

// readFile('./koders.json', (err, data) => {
//     if(err){
//         console.log('Error: ', err);
//         return
//     }

//     console.log("Leyendo la data: ", data);
// })

const fs = require('fs') ;
fs.readFile('./archivo.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('Error', error)
        return
    }
    console.log('Aqui estan pasando datos', data)
});
