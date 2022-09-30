// Definicion de la funcion
function irAlSuperMercado(callback) {
    console.log('Llendo al supermercado...');
    console.log('Llegue al supermercado...');
    const mensaje = callback();
    console.log(mensaje);
}

// Declaración de la funcion
function avisar() {
    return 'Hola, ya estoy en el supermercado';
}

irAlSuperMercado(avisar) // Correcto
irAlSuperMercado(avisar()) // --> la ejecucion de la funcion --> string -> incorrecto



console.log('Hola!!');
console.log('¿Cómo estan?');

// Asincronismo en JS
/**
 * !
 */

//
function saludar(despedirme) {
    console.log('Rafa esta saludando');
    despedirme()
}

// Firma de un método: Es la forma en la que va a recibir la funcion los parametros

saludar(() => {
    console.log('Rafa se esta despidiendo');
})


