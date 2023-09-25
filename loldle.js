
let inicio = document.getElementsByClassName("inicio")[0];


let champion_button = document.getElementsByClassName("select_game")[0];
let ability_button = document.getElementsByClassName("select_game")[1];
let quote_button = document.getElementsByClassName("select_game")[2];
let skin_button = document.getElementsByClassName("select_game")[3];

champion_button.addEventListener("click", function(){
    inicio.style.display = "none"; 
    document.getElementById("champion_guess").style.display = "block";
});

champions = [];
for (let i=100; i<allChampions.length; i++){
    champions.push(allChampions[i].nombre);
    }

console.log(champions);