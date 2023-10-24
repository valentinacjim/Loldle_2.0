
let home = document.getElementsByClassName("inicio")[0];
let champion_guess = document.getElementById("champion_guess");
// let ability_guess = document.getElementById("ability_guess");
let quote_guess = document.getElementById("quote_guess");
// let skin_guess = document.getElementById("skin_guess");

// CHAMPION GAME
let guess = allChampions[Math.floor(Math.random() * allChampions.length)];   

let buscador_champion = document.getElementById("input_text_champion");
let sugerencias_champion = document.getElementsByClassName("container-suggestions")[0];
let loldlecontent = document.getElementById("loldle-content");

let green = "#22ff00";
let yellow = "#ffcc00";

let guesses = 0;
let inicio = document.getElementsByClassName("title")[8];
let boton = document.getElementById("buscador");
boton.addEventListener("click", guess_champion_function);

// QUOTE GAME
const championNames = Object.keys(allQuotes);
const randomChampion = championNames[Math.floor(Math.random() * championNames.length)];
const quotesArray = allQuotes[randomChampion].quotes;
const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

let quote_text = document.getElementById("champion_quote");
quote_text.innerHTML = randomQuote[0];

let quote_audio = document.getElementById("quote_audio");
quote_audio.src = randomQuote[1];

let buscador_quote = document.getElementById("input_text_quote");
let sugerencias_quote = document.getElementsByClassName("container-suggestions")[1];



let champion_button = document.getElementsByClassName("select_game")[0];
let ability_button = document.getElementsByClassName("select_game")[1];
let quote_button = document.getElementsByClassName("select_game")[2];
let skin_button = document.getElementsByClassName("select_game")[3];

champion_button.addEventListener("click", function(){
    home.style.display = "none"; 
    champion_guess.style.display = "block";
    // ability_guess.style.display = "none";
    quote_guess.style.display = "none";
    // skin_guess.style.display = "none";
});

ability_button.addEventListener("click", function(){
    home.style.display = "none"; 
    champion_guess.style.display = "none";
    // ability_guess.style.display = "block";
    quote_guess.style.display = "none";
    // skin_guess.style.display = "none";
});

quote_button.addEventListener("click", function(){
    home.style.display = "none"; 
    champion_guess.style.display = "none";
    // ability_guess.style.display = "none";
    quote_guess.style.display = "block";
    // skin_guess.style.display = "none";
});

skin_button.addEventListener("click", function(){
    home.style.display = "none"; 
    champion_guess.style.display = "none";
    // ability_guess.style.display = "none";
    quote_guess.style.display = "none";
    // skin_guess.style.display = "block";
});