/**
 * TODO: Hacer las compras
 */

const cinMakePurchases = {
    name: 'Cintia Ruiz',
    atSuperMarket: false,
    paidPantry: false,
    atHome: false
}

// 
function gotToSuperMarket(personGoToSuperMarket) {
    return new Promise((resolve, reject) => {
        console.log(`${personGoToSuperMarket.name} llendo al supermercado...`);
        setTimeout(() => {
            personGoToSuperMarket.atSuperMarket = true
            if(!personGoToSuperMarket.atSuperMarket) {
                reject(`${personGoToSuperMarket.name} no pudo llegar al supermercado`);
            }
            resolve(personGoToSuperMarket);
        }, 3000)
    })
}

function payingThings(personToPay) {
    return new Promise((resolve, reject) => {
        console.log(`${personToPay.name} esta haciendo fila para pagar...`);
        setTimeout(() => {
            personToPay.paidPantry = true;
            if(!personToPay.paidPantry) {
                reject(`${personToPay.name} no pudo pagar la despensa`);
            }
            resolve(personToPay)
        }, 2000);
    })
}

function goToHome(personGoHome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            personGoHome.atHome = true
            if(!personGoHome.atHome) reject(`${personGoHome.name} no pudo llegar a casa`);
            resolve(personGoHome)
        }, 3000);
    })
}

// gotToSuperMarket(cinMakePurchases)
//     .then((personAtTheSuperMarket) => {
//         console.log(`${personAtTheSuperMarket.name} ya esta en el supermercado`);
//         console.log(personAtTheSuperMarket);
//     })
//     .catch((error) => {
//         console.error('Error: ', error);
//     })


// 
/*gotToSuperMarket(cinMakePurchases)
    .then((personAtSupermarket) => {
        console.log(`${personAtSupermarket.name} ya llego al supermercado`);
        console.log(personAtSupermarket);
        return payingThings(personAtSupermarket);
    })
    .then((personWithHisThings) => {
        console.log(`${personWithHisThings.name} ya pago su despensa`);
        console.log(personWithHisThings);
        return goToHome(personWithHisThings);
    })
    .then((personAtHome) => {
        console.log(`${personAtHome.name} ya esta en casa`);
        console.log(personAtHome);
    })
    .catch((error) => {
        console.error('Error: ', error);
    })*/


/**
 * async /await
 * 
 * async -> Marcar una función como asincrona
 * await -> Esperar el resultado de una promesa
 * 
 * ? Condiciones:
 * ! - Para usar AWAIT necesitamos una funcion que marcaremos como asyncrona
 * ! Donde utilizo await necesitamos marcar la funcion que la contiene como asincrona
 * ! - Las funciones marcadas como async, por defecto regresan una promesa
 */


async function main() {
    const personAtSuperMarket =  await gotToSuperMarket(cinMakePurchases); // regresa una promesa
    console.log(`${personAtSuperMarket.name} ya llego al supermercado`);
    console.log(personAtSuperMarket);

    const personWithHisThings = await payingThings(personAtSuperMarket);
    console.log(`${personWithHisThings.name} Ya pago su despensa`);
    console.log(personWithHisThings);

    const personAtHome = await goToHome(personWithHisThings);
    console.log(`${personAtHome.name} ya esta en casa`);
    console.log(personAtHome);
}

main()
.then(() => {
    console.log('Todo cool!');
})
.catch((error) => {
    console.error('Error: ', error);
})



/**
 * TODO:
 * ! 1. Realizar el proceso de inscripcion a Kodemia con promesas
 *      ? Encadenamiento de promesas
 *      ? async / await
 * ! 2. Práctica del CRUD de koders con file System con promesas:
 *      
 */