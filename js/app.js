// Renderizo los productos con JSON
$.get("./data/productos.json", function (datos, estado) {
    console.log(datos);
    console.log(estado);
    datos.forEach(prod => productos.push(prod))
    crearCards(productos)
    showCarrito(carrito)

    // Agregar Productos al carrito
    let plus = document.querySelectorAll(".plus")
    plus.forEach(boton => {
        boton.addEventListener("click", () => {
            const existe = carrito.find(element => element.id == boton.id)

            if (existe == undefined) {
                const encontrado = productos.find(element => element.id == boton.id);
                carrito.push(encontrado);
                carritoUI(carrito)
                localStorage.setItem('idProducto', JSON.stringify(carrito));
                showCarrito()
                actualizarPrecio()

            } else {
                existe.cantidad = existe.cantidad + 1
                carritoUI(carrito)
                localStorage.setItem('idProducto', JSON.stringify(carrito));
                actualizarPrecio()

            }
        })
    })


    // Eliminar productos del carrito
    let minus = document.querySelectorAll(".minus")
    minus.forEach(boton => {
        boton.addEventListener("click", () => {

            const existe = carrito.find(element => element.id == boton.id)
            if (existe == undefined) {
                const encontrado = productos.find(element => element.id == boton.id)
                carritoUI(carrito)
                localStorage.setItem('idProducto', JSON.stringify(carrito));
                actualizarPrecio()


            } else {
                if (existe.cantidad > 1) {
                    existe.cantidad = existe.cantidad - 1
                    carritoUI(carrito)
                    localStorage.setItem('idProducto', JSON.stringify(carrito));
                    showCarrito()
                    actualizarPrecio()

                } else {
                    carrito = carrito.filter(element => element.id != existe.id)
                    carritoUI(carrito)
                    localStorage.setItem('idProducto', JSON.stringify(carrito));
                    showCarrito()
                    actualizarPrecio()
                }

            }
        })
    })



})



$('#finalizarCompra').click(() => {

    for (const producto of carrito) {
        Toastify({
            text: `Su ${producto.name} se está preparando`,
            className: "info",
            gravity: "bottom",
            duration: 2000,
            style: {
                background: "#fff",
                fontSize: "1.45rem",
                color: "#f00",
                border: "2px solid #f00",
                borderRadius: "5px",
                fontWeight: "bold"
            }
        }).showToast();
    }
})