// CHAMPION GAME ///

let guess = allChampions[Math.floor(Math.random() * allChampions.length)];   

let buscador_champion = document.getElementById("input_text_champion");
let sugerencias_champion = document.getElementsByClassName("container-suggestions")[0];
let loldlecontent = document.getElementById("loldle-content");



// let guesses = 0;
let inicio = document.getElementsByClassName("title")[8];
let boton = document.getElementById("buscador");
boton.addEventListener("click", guess_champion_function);


buscador_champion.addEventListener("input", function() {
    if (buscador_champion.value.length === 0){
        sugerencias_champion.innerHTML = '';
        return;
    }
    sugerencias_champion.innerHTML = '';
    crear_sugerencia(buscador_champion, sugerencias_champion);
    let sugerencia_champion = document.getElementsByClassName("sugerencia");

    for (let i=0; i<sugerencia_champion.length; i++){
        sugerencia_champion[i].addEventListener("click", function () {
            buscador_champion.value = sugerencia_champion[i].getElementsByClassName("titulo_champion_busq")[0].innerText;
            sugerencias_champion.style.display = "none";
            guess_champion_function();
        });
    }
});

function guess_champion_function() {
    let champion = find(buscador_champion.value);

    loldlecontent.style.display = "grid";
   
    roles = array_to_string(champion.roles);
    species = array_to_string(champion.specie);
    regions = array_to_string(champion.region);

    create_element_function(champion, inicio, regions, species, roles);

    rol = number_array(guess.roles, champion.roles);
    especie = number_array(guess.specie, champion.specie);
    region = number_array(guess.region, champion.region);

    color_guesses(champion, rol, especie, region);
}

function array_to_string(array){
    let string = "";
    for (i=0; i<array.length; i++){
        string += array[i] + ", ";
    }
    string = string.slice(0, -2);
    return string;
}

function number_array(guess, champion){
    let counter = 0;
    for (i=0; i<guess.length; i++){
        if (champion.includes(guess[i])){
            counter += 1;
        }
        break;
    }
    if ((counter == guess.length)&&(counter == champion.length)){
        counter = 2;
    }
    else if(counter == 0){
        counter = 0;
    }
    else{
        counter = 1;
    }
    return counter;
}


function create_div(element){
    let inicio = document.getElementsByClassName("title")[8];
    let div = document.createElement("div");
    div.innerHTML =  " <div class='loldle-item'>\n" +
    "        <p><b>" + element + "</b></p>" +
    "    </div>\n";;
    inicio.after(div);
}


function create_element_function(champion, inicio, regions, species, roles) {
    create_div(champion.year);
    create_div(regions);
    create_div(champion.range);
    create_div(champion.resource);
    create_div(species);
    create_div(roles);
    create_div(champion.gender);
    create_div(champion.nombre);

    let img_text = document.createElement("div");
    img_text.innerHTML = " <div class='loldle-item'>\n" +
        "        <img alt='champion' src=" + champion.img + ">\n" +
        "    </div>\n";

    inicio.after(img_text);
}


function change_color(champion, guess, i, color) {
    if(champion == guess) document.getElementsByClassName("loldle-item")[i].style.backgroundColor = color;
}


function color_guesses(champion, rol, especie, region) {
    if (champion.img == guess.img) {
        for (i = 1; i < 9; i++) {
            change_color(champion.img, guess.img, i, green)
        }
    } else {
        change_color(champion.nombre, guess.nombre, 1, green);
        change_color(champion.gender, guess.gender, 2, green);
        change_color(rol, 2, 3, green);
        change_color(rol, 1, 3, yellow);
        change_color(especie, 2, 4, green);
        change_color(especie, 1, 4, yellow);
        change_color(champion.resource, guess.resource, 5, green);
        change_color(champion.range, guess.range, 6, green);
        change_color(region, 2, 7, green);
        change_color(region, 1, 7, yellow);
        
        if (champion.year == guess.year) {
            change_color(champion.year, guess.year, 8, green);
        }
        else if (champion.year < guess.year) {
            document.getElementsByClassName("loldle-item")[8].innerHTML += "<p><i class='fa-solid fa-arrow-up'></i></p>";
        }
        else {
            document.getElementsByClassName("loldle-item")[8].innerHTML += "<p><i class='fa-solid fa-arrow-down'></i></p>";
        }


    }
}

