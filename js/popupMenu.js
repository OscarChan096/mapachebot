const mostrarPopup = document.getElementById("mostrarPopup");
const miPopup = document.getElementById("miPopup");
const cerrarPopup = document.getElementById("cerrarPopup");

mostrarPopup.addEventListener("click", () => {
    miPopup.style.display = "block";
});

cerrarPopup.addEventListener("click", () => {
    miPopup.style.display = "none";
});