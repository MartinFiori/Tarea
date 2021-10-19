const buscador = document.querySelector("#buscador__input");
const cross = document.querySelector("#cross")


// Clearear el Buscador
cross.addEventListener('click', () => {
    buscador.value = ""
    cross.classList.remove("display")
})

// Agregar o sacar la X del buscador
buscador.addEventListener("input", () => {
    if (buscador.value !== "") {
        cross.classList.add("display")
    } else if (buscador.value.length >= 0 || buscador.value.length === 0) {
        cross.classList.remove("display")
    }
});