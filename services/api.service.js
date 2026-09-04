/**
 * un servicio es un tipo de archivo
 * donde vamos a tener funciones o clase con sus metodos
 * que ejecutan accione
 * 
 * !!Super importante
 * !Todas las funciones asincronas retornan una promesa, no importa que pienses tu que esta retornando es una promesa
 */

import { API_URL } from "/env.js";
console.log(API_URL);

// GET
export async function getAllProducts(){
    // 1. lanzar la peticion
    const response = await fetch(API_URL);
    const data = await response.json();
    return data

}

//     console.log(getAllProducts);
// getAllProducts();

//  Get 1 solo producto
export const getSingleProduct = async function(id){
    try{
        const response = await fetch(`${API_URL}/${id}`)
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error("Error", error);
    }
};

getSingleProduct(1);
getSingleProduct(9);
getSingleProduct(15);
