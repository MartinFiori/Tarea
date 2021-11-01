"use strict"


// Crear las cards, el slideDown, rotar las flechas y agregar los largos de cada contador
function crearCards(array) {
        array.forEach(element => {
                let card = document.createElement('div');
                card.classList.add(`card`);
                card.classList.add(`card${element.id}`)
                card.innerHTML += ` <div class="card__titulo title${element.id}">
                                <img class="card__img" src="${element.img}" alt="${element.name}">
                                <h2>${element.name}</h2>
                                <i class="arrow arrow${element.id}">&#9660;</i>
                                </div>

                                <div class="contenido toggle${element.id}">
                                <div class="contenido__contador">
                                <button type="" class="btn-carrito minus minus${element.id}" id="${element.id}">&minus;</button>
                                <p class="counter" id=counter${element.id}></p>
                                <button type="" class="btn-carrito plus plus${element.id} buy" id="${element.id}">&plus;</button>
                                </div>
                                <div class="contenido__descripcion">
                                        <p>${element.description}</p>
                                </div>
                                <div class="contenido__precio">
                                        <p>$${element.price}</p>
                                </div>
                                </div>`
                cardsContainer.appendChild(card)
                // Despliegue de las cards y de la flecha
                $(`.contenido`).hide()
                $(`.title${element.id}`).click(function () {
                        $(`.toggle${element.id}`).animate({
                                height: "toggle",
                                marginTop: "30px"
                        }, 250)
                })
                $(`.title${element.id}`).click(function () {
                        $(`.arrow${element.id}`).toggleClass('rotar');
                })

                // Contadores
                $(`#counter${element.id}`).html("0")
                let x = $(`#counter${element.id}`).text()


                $(`.plus${element.id}`).click(() => {
                        $(`#counter${element.id}`).text(++x)
                })

                $(`.minus${element.id}`).click(() => {
                        if (x <= 0) {
                                $(`#counter${element.id}`).html("0")
                        } else {
                                $(`#counter${element.id}`).text(--x)
                        }
                })
        });
}


// Mandar los items comprados al carrito
function carritoUI(carrito) {
        document.querySelector('#listaCarrito').innerHTML = "";
        for (const producto of carrito) {
                let tableRow = document.createElement('tr');
                tableRow.innerHTML +=
                        `
                        <td>${producto.name}</td>
                        <td>x${producto.cantidad}</td>
                        <td>$${producto.price}</td>
                        <td>$${producto.subtotal(producto.cantidad,producto.price)}</td>
                `
                document.querySelector('#listaCarrito').appendChild(tableRow)
        }
}

// Función para mostrar el sub-total



// Mostrar carrito cuando hay productos dentro
function showCarrito() {
        if (carrito.length <= 0) {
                $('#cart').hide(0)
                $('#cart').animate({
                        "opacity": "0",
                        "top": "100"
                }, 0)
        } else {
                $('#cart').show(150)
                $('#cart').animate({
                        "top": "150",
                        "opacity": "1"
                }, 150)
        }
}

$('.counter').html(0)
// Actualizar el precio del total del carrito
function actualizarPrecio() {
        let precioTotal = document.getElementById('mostrarTotal');
        precioTotal.innerText = carrito.reduce((acc, el) => acc + (el.price * el.cantidad), 0)
}


// Resetear tabla, counters y localStorage después de que finaliza la compra
function reset() {
        carrito = [];




        setTimeout(function () {
                document.getElementById('popup').classList.remove('active');
                cart.classList.remove('fa-times')
                $('.contenido').hide()
                $('#cart').hide()
                $(".counter").text(0)
                document.getElementById('cardsContainer').innerHTML=""
                crearCards(productos)

        }, 2500);
}