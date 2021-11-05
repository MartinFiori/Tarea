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

// Verificación datos "completa datos"

// Aparece el input de con cuanto abona
// let pago = document.getElementById('pago')
// let containerMetodosPagos = document.getElementById('containerMetodosPagos')



$('#validaciones').hide()
// // Validación de los inputs de cuando se piden los datos
// let mostrarTotal = document.querySelector('#mostrarTotal')
// // let cantidadPago = document.querySelector('#cantidadPago')
// let inputDebito = document.querySelector('#inputDebito')
// // console.log(cantidadPago);
// document.getElementById('finalizarPedido').addEventListener('click', (e) => {
//         e.preventDefault()
//         if ((document.getElementById('name').value === "") || (document.getElementById('address').value === "") || document.getElementById('pago').value === "disabled") {
//                 document.getElementById('validaciones-content').innerHTML = ""
//                 $('#validaciones').fadeIn()
//                 let validacionesContent = document.createElement("div")
//                 validacionesContent.innerHTML = `
//                                                 <h3>Ups!</h3>
//                                                 <p>Por favor, complete los datos solicitados correctamente</p>
//                                                 `
//                 document.getElementById('validaciones-content').appendChild(validacionesContent)
//         } else if ((cantidadPago.value - mostrarTotal.innerText) >= 0) {
//                 Toastify({
//                         text: `Redireccionando para enviar su comanda por Whastapp. Aguarde Por favor!`,
//                         duration: 3000,
//                         gravity: "top",
//                         position: "center",
//                         stopOnFocus: true,
//                         style: {
//                                 background: "linear-gradient(to right, #25D366, #96c93d)",
//                                 fontSize: "1.2rem",
//                                 borderRadius: "10px",
//                         },
//                 }).showToast();

//                 setTimeout(() => {
//                         location.href = "https://api.whatsapp.com/send?phone=+5491161726970"
//                 }, 3500);
//         } else if ((cantidadPago.value - mostrarTotal.innerText) < 0) {
//                 document.getElementById('validaciones-content').innerHTML = ""
//                 $('#validaciones').fadeIn()
//                 let validacionesContent = document.createElement("div")
//                 validacionesContent.innerHTML = `
//                                                 <h3>Ups!</h3>
//                                                 <p>Faltan $${mostrarTotal.innerText-cantidadPago.value} para abonar la totalidad del pedido</p>
//                                                 `
//                 document.getElementById('validaciones-content').appendChild(validacionesContent)
//         }

//         // const vaciarCarrito = document.getElementById('vaciar');
//         // vaciarCarrito.addEventListener('click', () => {
//         //         carrito.length = 0;
//         //         document.getElementById('contenedorCarrito').innerHTML = ` `
//         // })
// })




let inputName = document.getElementById('name')
let inputAddress = document.getElementById('address')
let textoTotal = document.getElementById('totalForm')
const finalizarPedido = document.getElementById('finalizarPedido')
let metodoPago = document.getElementById('pago')
let containerValidaciones = document.getElementById('validaciones-content')
let containerMetodosPagos = document.getElementById('containerMetodosPagos')
// let longitud = document.getElementById('inputDebito').value;
// console.log(longitud);



finalizarPedido.addEventListener('click', (e) => {
        e.preventDefault()
        if (inputName.value === "" || !isNaN(inputName.value) || inputAddress.value === "" || metodoPago.value === "disabled") {
                containerValidaciones.innerHTML = ""
                $('#validaciones').fadeIn()
                let validacionesContent = document.createElement("div")
                validacionesContent.innerHTML = `
                                                <h3>Ups!</h3>
                                                <p>Por favor, complete los datos solicitados correctamente</p>
                                                `
                document.getElementById('validaciones-content').appendChild(validacionesContent)
        }
})

metodoPago.addEventListener('change', () => {
        if (metodoPago.value === "efectivo") {
                let cantidadPago = document.getElementById('cantidadPago')
                let inputDebito = document.getElementById('inputDebito')
                let qr = document.getElementById('qr')
                containerMetodosPagos.innerHTML = ""
                let div = document.createElement('div')
                div.innerHTML = `<input type="text" class="cantidadPago" id="cantidadPago" placeholder="Indique la cantidad con la que va a abonar">`

                containerMetodosPagos.appendChild(div)

                if (inputDebito) {
                        inputDebito.remove()
                        console.log("se burró input debito desde metodo efectivo");
                } else if (qr) {
                        qr.remove()
                        console.log("se borró QR desde método efectivo");
                }


                finalizarPedido.addEventListener('click', () => {
                        let cantidadPago = document.getElementById('cantidadPago')
                        if (inputName.value != "" && isNaN(inputName.value) && inputAddress.value != "") {
                                if (metodoPago.value == "efectivo") {
                                        if (((cantidadPago.value - textoTotal.innerHTML) >= 0)) {
                                                Toastify({
                                                        text: `Redireccionando para enviar su comanda por Whastapp. Aguarde Por favor!`,
                                                        duration: 3000,
                                                        gravity: "top",
                                                        position: "center",
                                                        stopOnFocus: true,
                                                        style: {
                                                                background: "linear-gradient(to right, #25D366, #96c93d)",
                                                                fontSize: "1.2rem",
                                                                borderRadius: "10px",
                                                        },
                                                }).showToast();

                                                setTimeout(() => {
                                                        location.href = "https://api.whatsapp.com/send?phone=+5491161726970"
                                                }, 3500);
                                        }
                                        if (cantidadPago.value === "") {
                                                console.log("conhtenido vacio");
                                                containerValidaciones.innerHTML = ""
                                                $('#validaciones').fadeIn()
                                                let validacionesContent = document.createElement("div")
                                                validacionesContent.innerHTML = `
                                                                                <h3>Ups!</h3>
                                                                                <p>Por favor, complete los datos solicitados correctamente</p>
                                                                                `
                                                document.getElementById('validaciones-content').appendChild(validacionesContent)
                                        }
                                        if ((cantidadPago.value - textoTotal.innerHTML) < 0) {
                                                containerValidaciones.innerHTML = ""
                                                $('#validaciones').fadeIn()
                                                let validacionesContent = document.createElement("div")
                                                validacionesContent.innerHTML = `
                                                                                                <h3>Ups!</h3>
                                                                                                <p>Faltan $${mostrarTotal.innerText-cantidadPago.value} para abonar la totalidad del pedido</p>
                                                                                                `
                                                document.getElementById('validaciones-content').appendChild(validacionesContent)
                                        }
                                }
                        }
                })
        }

        if (metodoPago.value === "mercadopago") {
                let cantidadPago = document.getElementById('cantidadPago')
                let inputDebito = document.getElementById('inputDebito')
                containerMetodosPagos.innerHTML = ""
                let img = document.createElement('div')
                img.innerHTML = `<img src="./assets/metodos-pago/qr.png" alt="QR" class="qr" id="qr">`

                containerMetodosPagos.appendChild(img)
                if (cantidadPago) {
                        cantidadPago.remove()
                        console.log("se borró el input de efectivo desde mercadoPago");
                } else if (inputDebito) {
                        inputDebito.remove()
                        console.log("se borró el input de debito desde mercado pago");
                }
        }

        if (metodoPago.value === "tarjeta") {
                let cantidadPago = document.getElementById('cantidadPago')
                let qr = document.getElementById('qr')
                // console.log(inputDebito);


                containerMetodosPagos.innerHTML = ""
                let field = document.createElement('div')
                field.classList.add('debitoContainer')
                field.setAttribute("id", "debitoContainer")
                field.innerHTML = `
                                <input type="number" placeholder="Ingrese el número de su tarjeta" class="inputDebito" id="inputDebito" name="inputDebito" required>
                                <div>
                                        <img src="./assets/metodos-pago/visa.png" alt="visa">
                                        <img src="./assets/metodos-pago/mastercard.png" alt="mastercard">
                                </div>
                                `

                containerMetodosPagos.appendChild(field)
                if (qr) {
                        qr.remove()
                        console.log("se borró qr desde tarjeta");
                } else if (cantidadPago) {
                        cantidadPago.remove()
                        console.log("se borro cantidad pago desde qr");
                }

                finalizarPedido.addEventListener('click', () => {
                        let inputDebito = document.getElementById('inputDebito')
                        if (inputDebito.value.length == 16) {
                                Toastify({
                                        text: `Redireccionando para enviar su comanda por Whastapp. Aguarde Por favor!`,
                                        duration: 3000,
                                        gravity: "top",
                                        position: "center",
                                        stopOnFocus: true,
                                        style: {
                                                background: "linear-gradient(to right, #25D366, #96c93d)",
                                                fontSize: "1.2rem",
                                                borderRadius: "10px",
                                        },
                                }).showToast();

                                setTimeout(() => {
                                        location.href = "https://api.whatsapp.com/send?phone=+5491161726970"
                                }, 3500);
                        } else if (inputDebito.value.length != 16) {
                                containerValidaciones.innerHTML = ""
                                $('#validaciones').fadeIn()
                                let validacionesContent = document.createElement("div")
                                validacionesContent.innerHTML = `
                                                                                <h3>Ups!</h3>
                                                                                <p>Faltan ${16-inputDebito.value.length} números para que el número de la tarjeta sea válido</p>
                                                                                `
                                document.getElementById('validaciones-content').appendChild(validacionesContent)

                        }

                })
        }

})


let num = 16