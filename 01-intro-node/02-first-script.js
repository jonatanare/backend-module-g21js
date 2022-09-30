/**
 * TODO: Crear una funcion que reciba un nombre como parametro y devuelva un saludo con dicho nombre
 * Output -> 'Hola {alguien}, buenas  noches'
 */

function saludo(nombre) {
    return `Hola ${nombre}, buenas noches`;
}

console.log(saludo('Jonatan'));

/**
 * TODO: Crear una funcion que me devuelva un nombre aleatorio de un arreglo
 */

// Declarando una función, definiendo
function getNameRandom() {
    const arrayNames = ['Jonatan', 'Cintia', 'Benja bebe', 'Fer', 'Xavy bebe', 'La vieja chismosa'];
    const min = 0;
    const max = arrayNames.length

    const indexRandom = Math.floor(Math.random() * (max - min) + min);
    return arrayNames[indexRandom];
}

// Ejecución de la función
getNameRandom();

// 
const firstGreet = saludo(getNameRandom());

console.log(saludo(getNameRandom()));



//
function hola(name) {
    return `Hola, ${name}, buenas noches`;
}

const x =  hola('Jonatan')

// Pasar como referencia
const otraFuncion = hola

console.log(otraFuncion);