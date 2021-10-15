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


// $('.card__titulo').click(function () {
//     $('.contenido').animate({
//         height: "toggle"
//     })
// })


$('.card1').click(function () {
    $('.toggle1').animate({
        height: "toggle"
    })
})