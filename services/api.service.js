/**
 * un servicio es un tipo de archivo
 * donde vamos a tener funciones o clase con sus metodos
 * que ejecutan accione
 * 
 * !!Super importante
 * !Todas las funciones asincronas retornan una promesa, no importa que pienses tu que esta retornando es una promesa
 * 
 * Nota
 * La api tetch como el navegador por defecto lanza una peticion GET
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
        // console.log(data);
        return data;
    }catch(error){
        console.error("Error", error);
    }
};

// POST
export const createProduct = async (productObject) => {
    try{
        const response = await fetch(API_URL,{
            method: "POST",
            headers: {"Content-Type":"application/json"} ,
            body: JSON.stringify(productObject),

        })
        const data = await response.json();
        // console.log(data);
        return data;
    }catch(error){
        console.error("Error", error);
    }
}

createProduct({
title: "Chips fuego",
price: 20.0,
description: "Es vida pura",
category: "frituras",
image: "http://example.com"
})



// PUT
export async function updateProduct  (id, productObject) {
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: "PUT",
            headers: {"Content-Type":"application/json"} ,
            body: JSON.stringify(productObject),
        })
        const data = await response.json();
        console.log(data);
        // return data;
    }catch(error){
        console.error("Error", error);
    }
}
updateProduct(10,{title:"Regulador de voltaje", price: 200})

// DELETE
export const deleteProduct = async function (id) {
    try {
    const response = await fetch(`${API_URL}/${id}`,{
    method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.error("Error", error);
    }
};
