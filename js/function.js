"use strict"
// Creando las Cards
function crearCards(array) {
    array.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML += ` <div class="card__titulo">
                                <h2>${element.name}</h2>
                            </div>
                            <div class="contenido">
                                <div class="contenido__contador">
                                    <button type="" class="btn-carrito plus" id="${element.id}">&plus;</button>
                                    <p id=counter${element.id}></p>
                                    <button type="" class="btn-carrito minus" id="${element.id}">&minus;</button>
                                </div>
                                <div class="contenido__descripcion">
                                    <p>${element.description}</p>
                                </div>
                                <div class="contenido__precio">
                                    <p>$${element.price}</p>
                                </div>
                            </div>`

        cardsContainer.appendChild(card)
    });
}

crearCards(productos)







