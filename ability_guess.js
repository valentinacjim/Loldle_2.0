/// ABILITY GAME ///

let championNames_abilities = Object.keys(allAbilities);
let randomChampion_abilities = championNames_abilities[Math.floor(Math.random() * championNames_abilities.length)];
let abilitiesArray = allAbilities[randomChampion_abilities].abilities;
let numberAbility = Math.floor(Math.random() * abilitiesArray.length);
let randomAbilityName = abilitiesArray[numberAbility];

let champion_ability_img = document.getElementById("champion_ability_img");
champion_ability_img.src = randomAbilityName;
champion_ability_img.alt = randomAbilityName;
champion_ability_img.style.filter = "grayscale(100%)";
let deg = ROTATIONS[Math.floor(Math.random() * ROTATIONS.length)];
champion_ability_img.style.rotate = deg;


let buscador_ability = document.getElementById("input_text_ability");
let sugerencias_ability = document.getElementsByClassName("container-suggestions")[2];

buscador_ability.addEventListener("input", function() {
    if (buscador_ability.value.length === 0){
        sugerencias_ability.innerHTML = '';
        return;
    }
    sugerencias_ability.innerHTML = '';
    crear_sugerencia(buscador_ability, sugerencias_ability);
    let sugerencia_ability = document.getElementsByClassName("sugerencia");

    for (let i=0; i<sugerencia_ability.length; i++){
        sugerencia_ability[i].addEventListener("click", function () {
            buscador_ability.value = sugerencia_ability[i].getElementsByClassName("titulo_champion_busq")[0].innerText;
            sugerencias_ability.style.display = "none";
            let buscador_champion_ability = document.getElementById("input_text_ability");
            if (guess_function(buscador_champion_ability, "ability_guesses", "sugerencia_ability", randomChampion_abilities)){
                document.getElementById("keybinds").style.display = "block";
            } 
        });
    }
});

function correct_button(ability){
    console.log(ability);
    console.log(numberAbility);
    if(ability === numberAbility){
        document.getElementsByClassName("key")[ability].style.backgroundColor = green;
    }
    else{
        document.getElementsByClassName("key")[ability].style.backgroundColor = red;
    }
}