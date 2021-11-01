// Arrays
const productos = []
let carrito = []





var checkOpenStatus = function () {
    var d = new Date();
    var hour = d.getHours();
    if (((hour > 12) && (hour < 15)) || (hour >19 && hour <23)) {
        alert("abierto");
    } else {
        alert("cerrado");
    }
};

checkOpenStatus();






