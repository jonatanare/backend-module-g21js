function goToSuperMarket(callback) {
    console.log('Llendo al supermercado');
    setTimeout(() => {
        callback(null, 'Hola, ya llegue al supermercado');
    }, 5000)
}

function payThings(callback) {
    console.log('Haciendo fila para pagar...');
    setTimeout(() => {
        callback(null, 'Hola, ya pague la despensa');
        //callback('Se me olvido el monedero', null);
    }, 3000);
}

function arriveHome(callback) {
    console.log('Llendo a casa');
    setTimeout(() => {
        callback(null, 'Hola, ya estoy en casa :D')
    }, 3000);
}


/*goToSuperMarket((error, message) => {
    if(error) {
        console.log('Ah ocurrido algo: ', error);
        return; // Salidas tempranas
    }

    console.log(message);
    //ya llego al supermercado

    payThings((error, message) => {
        if(error) {
            console.log('Error: ', error);
            return;
        }

        console.log(message);

        arriveHome((errorArriveHome, messageHome) => {
            if(errorArriveHome) {
                console.log('Error: ', errorArriveHome);;
                return;
            }

            console.log(messageHome);
        })
    })
})*/

// callback hell

/**
 * TODO: Proceso de inscripción a Kodemia
 * ! 1° Recibir informacion | entrvista
 * ! 2° Enviar la oferta
 * ! 3° Incripción
 * ! 4° Prebootcamp
 * const inscriptionKodemiaCin = {
 *      name: 'Cin Ruiz'
 *      isInterviewed: false, // true
 *      hasOffer: false,
 *      isInscript: false,
 *      canTakeClass: false
 * }
 */

const inscriptionKodemiaCin = {
  name: "Cin Ruiz",
  isInterviewed: false, // true
  hasOffer: false,
  isInscript: false,
  canTakeClass: false,
};

function takeAInterview(koderToInterview, callback) {
    console.log(`Entrevistando a ${koderToInterview.name}`);

    setTimeout(() => {
        // Validar cuando si envia un error
        let error = null;

        koderToInterview.isInterviewed = true;

        if(!koderToInterview.isInterviewed){
            error = `No se logro entrevitar a ${koderToInterview.name}`;
        }
        callback(error, koderToInterview);
    }, 3000);
}

function doOffer(koderToOffer, callback) {
    console.log(`Viendo si le hacemos una oferta a ${koderToOffer.name}`);
    setTimeout(() => {
        koderToOffer.hasOffer = true;
        callback(error, koderToOffer);
    }, 4000);
}

takeAInterview(inscriptionKodemiaCin, (errorToInterview, koderInterviewed) => {
    if(errorToInterview) {
        console.log('Error entreviesta: ', errorToInterview);
        return;
    }

    console.log(`${koderInterviewed.name} ah sido entrevistada!!`);
    doOffer
})


























// function inscriptionToKodemia(callback) {
//     console.log(`Enviar información del bootcamp a: ${inscriptionKodemiaCin.name}`);
//     setTimeout(() => {
//         callback(null, 'Hola, ya me llego la información')
//     }, 3000);
// }

// function sendOffer(callcack) {

// }

// inscriptionToKodemia((error, message, inscriptionKodemiaCin) => {
//     if(error) {
//         console.log('No llego el correo: ', error);
//         return;
//     }

//     message += `${inscriptionKodemiaCin.name}`
//     console.log(message);
// })