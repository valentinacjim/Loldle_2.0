let buscador = document.getElementById("input_text");
let sugerencias = document.getElementsByClassName("container-suggestions")[0];


// Función para filtrar los caracteres especiales
function filter(text) {
    text = text.toLowerCase();
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    text = text.replace(/\s/g, '');
    text = text.trim();
    return text;
}

buscador.addEventListener("input", function() {
    console.log(allChampions.length);
    if (buscador.value.length === 0){
        sugerencias.style.opacity = "0";
        sugerencias.innerHTML = '';
        return;
    }
    sugerencias.innerHTML = '';
    for(let i=0; i<allChampions.length; i++){

        if (filter(allChampions[i].nombre).startsWith(filter(buscador.value))){
            sugerencias.style.opacity = "1";
            sugerencias.innerHTML += "<div class='sugerencia'>\n" +
                "    <div class='sugerencia_container1'>\n" +
                "    <div class='champion_container'>" +
                "        <img alt='champion' src=" + allChampions[i].img+ ">\n" +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + allChampions[i].nombre + "</b></p>" +
                "    </div>\n" +
                "</div>"

    }}
});