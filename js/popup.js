"use strict"

// Activar overlay
// $('#cart').click(() => {
// $('.overlay')
// });

// Popup 
document.getElementById('cart').addEventListener("click", () =>{
    document.getElementById('popup').classList.toggle('active');
})


// Cambiar el carrito por una cruz
let cart = document.getElementById('cart')
cart.addEventListener('click', ()=>{
    cart.classList.toggle('fa-times')
})