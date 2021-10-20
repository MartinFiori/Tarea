"use strict"

function crearCards(array) {
        array.forEach(element => {
                let card = document.createElement('div');
                card.classList.add(`card`);
                card.classList.add(`card${element.id}`)
                card.innerHTML += ` <div class="card__titulo title${element.id}">
                                <h2>${element.name}</h2>
                                <i class="arrow arrow${element.id}">&#9660;</i>
                                </div>
                                <div class="contenido toggle${element.id}">
                                <div class="contenido__contador">
                                        <button type="" class="btn-carrito plus plus${element.id} buy" id="${element.id}">&plus;</button>
                                        <p id=counter${element.id}></p>
                                        <button type="" class="btn-carrito minus minus${element.id}" id="${element.id}">&minus;</button>
                                </div>
                                <div class="contenido__descripcion">
                                        <p>${element.description}</p>
                                </div>
                                <div class="contenido__precio">
                                        <p>$${element.price}</p>
                                </div>
                                </div>`
                cardsContainer.appendChild(card)

                $(`.contenido`).hide()
                $(`.title${element.id}`).click(function () {
                        $(`.toggle${element.id}`).animate({
                                height: "toggle"
                        }, 250)
                })

                $(`.title${element.id}`).click(function () {
                        $(`.arrow${element.id}`).toggleClass('rotar');
                })

        });
        contador1()
        contador2()
        contador3()
        contador4()
        contador5()
        contador6()
        contador7()
        contador8()
        contador9()
        contador10()
}



function carritoUI(carrito) {
        for (const producto of carrito) {
                console.log("funciona");
                let tableRow = document.createElement('tr');
                tableRow.innerHTML +=
                        `
                        <td>${producto.name}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.price}</td>
                        <td><i class="far fa-trash-alt"></i></td>
                `
                document.querySelector('#listaCarrito').appendChild(tableRow)
        }
}