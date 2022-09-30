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

/**
 * TODO: 1° Recibir informacion | entrvista
 */
function takeAInterview(koderToInterview, callback) {
  console.log(`Entrevistando a ${koderToInterview.name}`);

  setTimeout(() => {
    // Validar cuando si envia un error
    let error = null;

    koderToInterview.isInterviewed = true;

    if (!koderToInterview.isInterviewed) {
      error = `No se logro entrevitar a ${koderToInterview.name}`;
    }
    callback(error, koderToInterview);
  }, 3000);
}

/**
 * TODO: 2° Enviar la oferta
 */
function doOffer(koderToOffer, callback) {
  console.log(`Viendo si le hacemos una oferta a ${koderToOffer.name}`);
  setTimeout(() => {
    koderToOffer.hasOffer = true;
    callback(error, koderToOffer);
  }, 4000);
}

takeAInterview(inscriptionKodemiaCin, (errorToInterview, koderInterviewed) => {
  if (errorToInterview) {
    console.log("Error entreviesta: ", errorToInterview);
    return;
  }

  console.log(`${koderInterviewed.name} ah sido entrevistada!!`);
  doOffer(inscriptionKodemiaCin, (errorDoOffer, koderToOffer) => {
    if(errorDoOffer){
      console.log("Eror al ofertar: ", errorDoOffer);
      return;
    }
    console.log(`${koderToOffer.name}`);
  })
});
