// QUOTE GAME///

let championNames = Object.keys(allQuotes);
let randomChampion = championNames[Math.floor(Math.random() * championNames.length)];
let quotesArray = allQuotes[randomChampion].quotes;
let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

let quote_text = document.getElementById("champion_quote");
quote_text.innerHTML = randomQuote[0];

let quote_audio = document.getElementById("quote_audio");
quote_audio.src = randomQuote[1];

let buscador_quote = document.getElementById("input_text_quote");
let sugerencias_quote = document.getElementsByClassName("container-suggestions")[1];

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
            let buscador_champion_quote = document.getElementById("input_text_quote");
            guess_function(buscador_champion_quote, "quote_guesses", "sugerencia_quote", randomChampion)
        });
    }
});

