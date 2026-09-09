import { getAllProducts } from "./services/api.service.js";

const mainEl = document.querySelector("main");
const modalEl = document.querySelector("#full-info");
const closeBtn = modalEl.querySelector("button");
const contentDiv = modalEl.querySelector(".content");
const products = await getAllProducts();
// console.log(mainEl);
// console.log(modalEl);
// console.log(closeBtn);
// console.log(contentDiv);

/**
 * destructuring en objetos tipo js
 * Es una forma de descomponer el objeto en variables
 * 
 * Reglas para su uso
 * objeto ejemplo
 * const persona {
 *  name: "mike",
 *  age: 27
 * }
 * const {name} = persona;
 * !lmportante las variables se deben llamar igual que la key del objeto


const album = {
    title: "breach",
    artist: "twenty one pilots",
    tracks: ["drag path", "rawfear", "robot voices"],
    raiting: {
        rate: 5,
        count: 200,
    },
};

let{ title, artist, raiting, tracks} = album;
// let title = album.title; let artist = album.artist; justo es para evitar usar mucho codigo de esta forma en uno solo podemos llamar a varios mediante sus keys y usarlo sin afectar el original
console.log(title);
console.log(artist);
console.log(raiting);
console.log(tracks);

// title = "clancy"
// console.log(title);
 */

// todo deberiamos pedir asesoria de esto
// esta funcion recibe un objeto que va a ser indmediatamente desestructurado
const renderProduct = ({title, description, image, id}) => { //estas son las llaves que va a usar, sin ellas no funcionaria
    const productCard = `
    <div class="card">
    <img src="${image}" class="card-img-top" alt="${description}">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">S${description}</p>
            <button id="info" data-id="${id}" class="btn btn-primary">View full info</button>
            <button id="delete" data-id="${id}" class="btn btn-danger">Delete product</button>
        </div>
    </div>
    `;
    mainEl.insertAdjacentHTML("beforeend", productCard);
};



products.map((product) => renderProduct(product));

const showInfo = function (product){
    contentDiv.innerHTML = ""
    const infoCard = `
    <div class="card" >
        <img src="${product.image}" class="card-img-top" alt="${product.description}">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">$${product.price}</li>
            <li class="list-group-item">${product.category}</li>
            <li class="list-group-item">${product.rating.rate}</li>
        </ul>
    </div>
    `;
    contentDiv.insertAdjacentHTML("afterbegin", infoCard);
    modalEl.showModal();
}
/**
 * event delegation
 * Generar la escucha del evento en un contenedor padre
 * Esta sera accionada incluso en los elementos hijos
 * Mediante el evento podemos filtrar exactamente en donde ocurrio
 * Nota en JS existe el operador
 * === =>(= = =) y !== => (! = =), son operadores estrictos
 * evaluan valor y tipo dato
 */

// Agregando el evento  deseado a un elemento pa
mainEl.addEventListener("click", (e) => {
    e.preventDefault();
    //descartando donde ocurrio el evento
    if(e.target.id !== "info") return;
    const productId = e.target.dataset.id;
    showInfo(products[productId - 1]);
    closeBtn.addEventListener("click", () => modalEl.close());
});

mainEl.addEventListener("click", (e) => {
    e.preventDefault();
    //descartando donde ocurrio el evento
    if(e.target.id !== "delete") return;
    const productId = e.target.dataset.id;
    showInfo(products[productId - 1]);
    closeBtn.addEventListener("click", () => modalEl.close());
});
