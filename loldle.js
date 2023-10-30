
let home = document.getElementsByClassName("inicio")[0];
let champion_guess = document.getElementById("champion_guess");
let ability_guess = document.getElementById("ability_guess");
let quote_guess = document.getElementById("quote_guess");
let skin_guess = document.getElementById("skin_guess");

let back = document.getElementsByClassName("volver")[0];
back.addEventListener("click", function(){
    home.style.display = "block"; 
    champion_guess.style.display = "none";
    ability_guess.style.display = "none";
    quote_guess.style.display = "none";
    skin_guess.style.display = "none";
    back.style.display = "none";
});

let green = "#22ff00";
let yellow = "#ffcc00";
let red = "#ff0000";

let champion_button = document.getElementsByClassName("select_game")[0];
let ability_button = document.getElementsByClassName("select_game")[1];
let quote_button = document.getElementsByClassName("select_game")[2];
let skin_button = document.getElementsByClassName("select_game")[3];

champion_button.addEventListener("click", function(){
    home.style.display = "none"; 
    champion_guess.style.display = "block";
    ability_guess.style.display = "none";
    quote_guess.style.display = "none";
    skin_guess.style.display = "none";
    back.style.display = "block";
});

ability_button.addEventListener("click", function(){
    home.style.display = "none"; 
    champion_guess.style.display = "none";
    ability_guess.style.display = "block";
    quote_guess.style.display = "none";
    skin_guess.style.display = "none";
    back.style.display = "block";
});

quote_button.addEventListener("click", function(){
    home.style.display = "none"; 
    champion_guess.style.display = "none";
    ability_guess.style.display = "none";
    quote_guess.style.display = "block";
    skin_guess.style.display = "none";
    back.style.display = "block";
});

skin_button.addEventListener("click", function(){
    home.style.display = "none"; 
    champion_guess.style.display = "none";
    ability_guess.style.display = "none";
    quote_guess.style.display = "none";
    skin_guess.style.display = "block";
    back.style.display = "block";
});