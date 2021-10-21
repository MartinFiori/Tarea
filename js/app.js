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

// Mostrar carrito cuando hay productos dentro
function showCarrito() {

    if (carrito.length <= 0) {
        $('#cart').hide(0)
        $('#cart').animate({
            "opacity": "0",
            "top": "100"
        }, 0)

        console.log('vacio');
    } else {
        $('#cart').show(150)
        $('#cart').animate({
            "top": "150",
            "opacity": "1"
        }, 150)
        console.log('lleno');

    }


}
function actualizarPrecio() {
    let precioTotal = document.getElementById('mostrarTotal');
    precioTotal.innerText = carrito.reduce((acc, el) => acc + (el.price * el.cantidad), 0)
}