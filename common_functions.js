// Función para filtrar los caracteres especiales
function filter(text) {
    text = text.toLowerCase();
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    text = text.replace(/\s/g, '');
    text = text.trim();
    return text;
}

// Función para crear las sugerencias
function crear_sugerencia(champion, container) {
    for (let i = 0; i < allChampions.length; i++) {
        if (filter(allChampions[i].nombre).startsWith(filter(champion.value))) {
            container.style.display = "block";
            container.innerHTML += "<div class='sugerencia'>\n" +
                "    <div class='champion_container'>" +
                "        <img alt='champion' src=" + allChampions[i].img + ">\n" +
                "    </div>\n" +
                "    <div class='titulo_champion_busq'>\n" +
                "        <p><b>" + allChampions[i].nombre + "</b></p>" +
                "    </div>\n" +
                "</div>";

        }
    }
}

function find(buscador_champion, allChampions) {
    let nombre = filter(buscador_champion);
    
    buscador_champion = "";
    let champion = allChampions.find(champion => filter(champion.nombre) === nombre);
    console.log("allChampions",allChampions)
    return champion;
}


function guess_function(buscador, div, sugerencia, realNumber, allChampions_to_find){
    let champion = find(buscador.value, allChampions_to_find);
    allChampions_to_find.splice(allChampions_to_find.indexOf(champion), 1);
    console.log("allChampions_to_find",allChampions_to_find);
    create_champion_banner(champion, div, sugerencia);
    buscador.value = "";
    if (champion === allChampions[realNumber]){
        document.getElementsByClassName(sugerencia)[0].style.backgroundColor = green;
        return true;
    }   
    return false;

}

function create_champion_banner(champion, div, sugerencia) {
    for (let i=0; i<allChampions.length; i++){
        if (allChampions[i].nombre === champion) champion = allChampions[i];
        
    }
    let champion_banner = document.getElementById(div);
    let champion_field = document.createElement("div");
    champion_field.innerHTML = "<div class='"+ sugerencia + "'>\n" +
    "    <div class='champion_container'>" +
    "        <img alt='champion' src=" + champion.img+ ">\n" +
    "    </div>\n" +
    "    <div class='titulo_champion_busq'>\n" +
    "        <p><b>" + champion.nombre + "</b></p>" +
    "    </div>\n" +
    "</div>"
    champion_banner.after(champion_field);
}
