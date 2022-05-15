// Function para encender la consola.
function myFunction() {
    let textoGameboy = document.getElementById("gameboyText");
    let textoNintendo = document.getElementById("nintendoText");
    let led = document.getElementById("led");
    let audio = document.createElement("audio");
    // Condicion para hacer que aparezcan y desaparezcan los elementos al hacer click. 
    if (textoGameboy.style.display === "none" && textoNintendo.style.display === "none") {
        textoGameboy.style.display = "block";
        textoNintendo.style.display = "flex";
        led.classList.add("led-animation");
        audio.setAttribute("src","/mp3/GameBoy-Audio-Sound.mp3");
        audio.play();
    } else {
        textoGameboy.style.display = "none";
        textoNintendo.style.display = "none";
        led.classList.remove("led-animation");
    }
}