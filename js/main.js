// Function para encender la consola.
function myFunction() {
    var textoGameboy = document.getElementById("gameboyText");
    var textoNintendo = document.getElementById("nintendoText");
    var led = document.getElementById("led");
    // Condicion para hacer que aparezcan y desaparezcan los elementos al hacer click. 
    if (textoGameboy.style.display === "none" && textoNintendo.style.display === "none") {
        textoGameboy.style.display = "block";
        textoNintendo.style.display = "flex";
        led.classList.add("led-animation")
    } else {
        textoGameboy.style.display = "none";
        textoNintendo.style.display = "none";
        led.classList.remove("led-animation");
    }
}