buscador_quote.addEventListener("input", function() {
    if (buscador_quote.value.length === 0){
        // sugerencias.style.opacity = "0";
        sugerencias_quote.innerHTML = '';
        return;
    }
    sugerencias_quote.innerHTML = '';
    crear_sugerencia(buscador_quote, sugerencias_quote);
    let sugerencia_quote = document.getElementsByClassName("sugerencia");

    for (let i=0; i<sugerencia_quote.length; i++){
        sugerencia_quote[i].addEventListener("click", function () {
            buscador_quote.value = sugerencia_quote[i].getElementsByClassName("titulo_champion_busq")[0].innerText;
            sugerencias_champion.style.display = "none";
            guess_quote_function();
        });
    }
});

let buscador_champion_quote = document.getElementById("input_text_quote");

function guess_quote_function() {
    let champion = find(buscador_champion_quote.value);
    create_champion_banner(champion);

    if (champion === allChampions[randomChampion]){
        document.getElementsByClassName("sugerencia_quote")[0].style.backgroundColor = "green";
    }

}

function create_champion_banner(champion) {
    for (let i=0; i<allChampions.length; i++){
        if (allChampions[i].nombre === champion) champion = allChampions[i];
        
    }
    let champion_banner = document.getElementById("quote_guesses");
    let champion_field = document.createElement("div");
    champion_field.innerHTML = "<div class='sugerencia_quote'>\n" +
    "    <div class='champion_container'>" +
    "        <img alt='champion' src=" + champion.img+ ">\n" +
    "    </div>\n" +
    "    <div class='titulo_champion_busq'>\n" +
    "        <p><b>" + champion.nombre + "</b></p>" +
    "    </div>\n" +
    "</div>"
    champion_banner.after(champion_field);
}