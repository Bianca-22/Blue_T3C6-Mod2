var btn = document.getElementById("click");
var humor = document.getElementById("humor");
var texto = document.getElementById("texto");

btn.onclick = function() {
    if (btn.value === "feliz"){
        texto.innerHTML = "Gatinho Feliz"
        humor.src = "gatinho_feliz.jpg";
        btn.value = "triste";
        btn.innerHTML = "Humor";
    } 
    else{
        texto.innerHTML = "Gatinho Triste"
        humor.src = "gatinho_triste.jpg";
        btn.value = "feliz";
        btn.innerHTML = "Humor"
    }
}
