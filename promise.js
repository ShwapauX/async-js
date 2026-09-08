/**
 * Promesas escritas
 * 1. resolve el caso de exito (caso en el que la promesa se resuelve de manera favorable)
 * 2. reject, el caso de fracaso (caso en el que la promesa se resuelve de manera no tavoraOle)
 * !lmportante
 * Al crear una promesa esta debe ser retornada de una funcion
 * 
 */


console.log("primer console log")
function waitNSeconds(seconds){
    console.log("primer console log dentro de la funcion");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const state = true;
            if (state) {
                resolve("la peticion fue exitosa")
            } else {
                reject("la peticion fracaso")
            }
    }, seconds * 1000);
    });
}

waitNSeconds(3)
    .then((response) => {
        console.log("caso resolve");
        console.log(response);
    })
    .catch((error)=>{
        console.log("Caso reject");
        console.log(error);
    });

console.log("segundo console log")
console.log("tercero console log")
console.log("cuarto console log")

