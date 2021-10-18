// Agregar al carrito
let plus = document.querySelectorAll(".plus")

plus.forEach(boton => {
    boton.addEventListener("click", () => {
        const existe = carrito.find(element => element.id == boton.id)
        if (existe == undefined) {
            const encontrado = productos.find(element => element.id == boton.id)
            carrito.push(encontrado)
        } else {
            existe.agregarCantidad(1)
        }
    })
})

// Sacar del carrito
let minus = document.querySelectorAll(".minus")


minus.forEach(boton => {
    boton.addEventListener("click", () => {
        const existe = carrito.find(element => element.id == boton.id)
        if (existe == undefined) {
            const encontrado = productos.find(element => element.id == boton.id)
            carrito.push(encontrado)
        } else {
            existe.restarCantidad(1)
        }
    })
})

// $.get("data/productos.json"), (respuesta, estado) => {
//     console.log(estado);
//     for (const objeto of respuesta) {
//         productos.push(new Producto(objeto.id, objeto.name, objeto.price, objeto.description, objeto.img, objeto.cantidad))
//     }
//     crearCards(productos, "#cardsContainer")
// }

let cantidad=1;

let agregarCantidad = (valor) =>{
    cantidad += valor
}

let restarCantidad = (valor) =>{
    cantidad -= valor
}

let subtotal = () =>{
    cantidad * price
}



$.get("./data/productos.json", function(datos, estado){
    console.log(datos);
    console.log(estado);
    datos.forEach(prod=>productos.push(prod))
    // let localDos= localStorage.setItem('stock',JSON.stringify(data))
    // console.log(localDos);
    crearCards(productos)
})



function crearCards(array) {
    array.forEach(element => {
        let card = document.createElement('div');
        card.classList.add(`card`);
        card.classList.add(`card${element.id}`)
        card.innerHTML += ` <div class="card__titulo title${element.id}">
                                <h2>${element.name}</h2>
                            </div>
                            <div class="contenido toggle${element.id}">
                                <div class="contenido__contador">
                                    <button type="" class="btn-carrito plus plus${element.id}" id="${element.id}">&plus;</button>
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
            console.log(element.id)
            $(`.toggle${element.id}`).animate({
                height: "toggle"
            },250)
        })


    });
}

crearCards(productos)


