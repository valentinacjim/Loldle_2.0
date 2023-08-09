let buscador = document.getElementById("input_text");
let sugerencias = document.getElementsByClassName("container-suggestions")[0];
let loldlecontent = document.getElementById("loldle-content");


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
        // sugerencias.style.opacity = "0";
        sugerencias.innerHTML = '';
        return;
    }
    sugerencias.innerHTML = '';
    for(let i=0; i<allChampions.length; i++){

        if (filter(allChampions[i].nombre).startsWith(filter(buscador.value))){
            sugerencias.style.display = "block";
            sugerencias.innerHTML += "<div class='sugerencia'>\n" +
                "    <div class='champion_container'>" +
                "        <img alt='champion' src=" + allChampions[i].img+ ">\n" +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + allChampions[i].nombre + "</b></p>" +
                "    </div>\n" +
                "</div>"

    }}
    let sugerencia = document.getElementsByClassName("sugerencia");

    for (let i=0; i<sugerencia.length; i++){
        console.log(sugerencia[i]);
        sugerencia[i].addEventListener("click", function () {
            // console.log(sugerencia.getElementsByClassName("titulo_artista_busq")[0].innerText);
            buscador.value = sugerencia[i].getElementsByClassName("titulo_artista_busq")[0].innerText;
            sugerencias.style.display = "none";
            // loldlecontent.style.display = "block";
        });
    }
});

let boton = document.getElementById("buscador");
boton.addEventListener("click", function () {
    loldlecontent.style.display = "grid";
    let nombre = filter(buscador.value);
    let champion = allChampions.find(champion => filter(champion.nombre) === nombre);
    console.log(champion);
    loldlecontent.innerHTML += "<div class='loldle-item'>" +
        "        <img alt='champion' src=" + champion.img+ ">\n" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.nombre + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.gender + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.roles + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.specie + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.resource + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.range + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.region + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.year + "</b></p>" +
        "    </div>\n" 
}   
    
    )
