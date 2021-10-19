// Agregar al carrito

$.get("./data/productos.json", function (datos, estado) {
    console.log(datos);
    console.log(estado);
    datos.forEach(prod => productos.push(prod))
    // let localDos= localStorage.setItem('stock',JSON.stringify(data))
    // console.log(localDos);
    crearCards(productos)

    let plus = document.querySelectorAll(".plus")

    plus.forEach(boton => {
        boton.addEventListener("click", () => {
            const existe = carrito.find(element => element.id == boton.id)

            if (existe == undefined) {
                const encontrado = productos.find(element => element.id == boton.id)
                carrito.push(encontrado)
            } else {
                existe.cantidad = existe.cantidad + 1

            }
        })
    })

    let minus = document.querySelectorAll(".minus")


    minus.forEach(boton => {
        boton.addEventListener("click", () => {
            const existe = carrito.find(element => element.id == boton.id)
            if (existe == undefined) {
                const encontrado = productos.find(element => element.id == boton.id)
                carrito.push(encontrado)
            } else {
                if (existe.cantidad > 1) {
                    existe.cantidad = existe.cantidad - 1
                } else {
                    carrito = carrito.filter(element => element.id != existe.id)
                }

            }
        })
    })
})



let minus = document.querySelectorAll(".minus")


minus.forEach(boton => {
    boton.addEventListener("click", () => {
        const existe = carrito.find(element => element.id == boton.id)
        if (existe == undefined) {
            const encontrado = productos.find(element => element.id == boton.id)
            carrito.push(encontrado)
        } else {
            if (existe.cantidad > 1) {
                existe.cantidad = existe.cantidad - 1
            } else {
                carrito = carrito.filter(element => element.id != existe.id)
            }

        }
    })
})