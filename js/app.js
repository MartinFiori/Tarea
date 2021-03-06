class Producto {
    constructor(id, name, price, description, img) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.img = img
        this.cantidad = 1
    }
    subtotal(cantidad, price) {
        return cantidad * price
    }
}

// Renderizo los productos con JSON
$.get("./data/productos.json", function (datos, estado) {
    console.log(datos);
    console.log(estado);
    datos.forEach(prod => productos.push((new Producto(prod.id, prod.name, prod.price, prod.description, prod.img, prod.cantidad))))
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
            } else {
                existe.cantidad = existe.cantidad + 1
                carritoUI(carrito)
                localStorage.setItem('idProducto', JSON.stringify(carrito));
                actualizarPrecio()
            }
            carritoUI(carrito)
            localStorage.setItem('idProducto', JSON.stringify(carrito));
            showCarrito()
            actualizarPrecio()
        })
    })


    // Eliminar productos del carrito
    let minus = document.querySelectorAll(".minus")
    minus.forEach(boton => {
        boton.addEventListener("click", () => {

            const existe = carrito.find(element => element.id == boton.id)
            if (existe == undefined) {
                const encontrado = productos.find(element => element.id == boton.id)
            } else {
                if (existe.cantidad > 1) {
                    existe.cantidad = existe.cantidad - 1
                } else {
                    carrito = carrito.filter(element => element.id != existe.id)
                }
                localStorage.setItem('idProducto', JSON.stringify(carrito));
                carritoUI(carrito)
                showCarrito()
                actualizarPrecio()
            }
        })
    })
})



