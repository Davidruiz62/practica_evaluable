const boton = document.getElementById("btnMensaje");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {

    mensaje.textContent =
        "Git y GitHub son herramientas fundamentales en desarrollo web.";

});