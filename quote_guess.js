// Get a list of all the champion names
const championNames = Object.keys(allQuotes);

// Select a random champion from the list of champion names
const randomChampion = championNames[Math.floor(Math.random() * championNames.length)];

// Get the quotes array for the selected champion
const quotesArray = allQuotes[randomChampion].quotes;

// Select a random quote from the quotes array
const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

// Return the selected quote
console.log(randomQuote);

let buscador_quote = document.getElementById("input_text_quote");
let sugerencias_quote = document.getElementsByClassName("container-suggestions")[1];

let quote_text = document.getElementById("champion_quote");
quote_text.innerHTML = randomQuote[0];

let quote_audio = document.getElementById("quote_audio");
console.log(quote_audio);
quote_audio.src = randomQuote[1];

buscador_quote.addEventListener("input", function() {
    if (buscador_quote.value.length === 0){
        // sugerencias.style.opacity = "0";
        sugerencias_quote.innerHTML = '';
        return;
    }
    sugerencias_quote.innerHTML = '';
    for(let i=0; i<allChampions.length; i++){
        console.log(buscador_quote.value);
        if (filter(allChampions[i].nombre).startsWith(filter(buscador_quote.value))){
            sugerencias_quote.style.display = "block";
            sugerencias_quote.innerHTML += "<div class='sugerencia'>\n" +
                "    <div class='champion_container'>" +
                "        <img alt='champion' src=" + allChampions[i].img+ ">\n" +
                "    </div>\n" +
                "    <div class='titulo_champion_busq'>\n" +
                "        <p><b>" + allChampions[i].nombre + "</b></p>" +
                "    </div>\n" +
                "</div>"

    }}
    let sugerencia_quote = document.getElementsByClassName("sugerencia");

    for (let i=0; i<sugerencia_quote.length; i++){
        // console.log(sugerencia_quote[i]);
        sugerencia_quote[i].addEventListener("click", function () {
            // console.log(sugerencia_quote.getElementsByClassName("titulo_champion_busq")[0].innerText);
            buscador_quote.value = sugerencia_quote[i].getElementsByClassName("titulo_champion_busq")[0].innerText;
            sugerencias_champion.style.display = "none";
            // loldlecontent.style.display = "block";
            guess_quote_function();
        });
    }
});

let buscador_champion_quote = document.getElementById("input_text_quote");
function guess_quote_function() {
    let nombre = filter(buscador_champion_quote.value);
    console.log(nombre);
    buscador_champion_quote.value = "";
    let champion = allChampions.find(champion => filter(champion.nombre) === nombre);
    console.log(champion);
    create_champion_banner(champion);

    if (champion === allChampions[randomChampion]){
        console.log("Correcto");
        document.getElementsByClassName("sugerencia_quote")[0].style.backgroundColor = "green";
    }

}

function create_champion_banner(champion) {
    for (let i=0; i<allChampions.length; i++){
        if (allChampions[i].nombre === champion){
            champion = allChampions[i];
        }

    }
    console.log(champion);
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