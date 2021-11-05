"use strict"

// Popup 
document.getElementById('cart').addEventListener("click", () => {
    document.getElementById('popup').classList.toggle('active');
    document.getElementById('popup').classList.remove('move')
})


// Cambiar el carrito por una cruz
let cart = document.getElementById('cart')
cart.addEventListener('click', () => {
    cart.classList.toggle('fa-times')
})


// popup horario
$(window).on('load', ()=>{
    $('.popup-2').addClass('closed')
})
// popup horario
$('#horario-btn').on('click', ()=>{
    $('.popup-2').removeClass('closed')
})

// Pasar a completar Datos
document.getElementById('continuar').addEventListener('click', ()=>{
    document.getElementById('popup').classList.remove('active')
    document.getElementById('popup3').classList.add('move')
    cart.style.visibility= "hidden"
    let totalForm = document.getElementById('totalForm');
    totalForm.innerHTML = carrito.reduce((acc, el) => acc + (el.price * el.cantidad), 0)
})



// cerrar validaciones
$('.valid-closeBtn').on('click',()=>{
    $('#validaciones').fadeOut()
})

