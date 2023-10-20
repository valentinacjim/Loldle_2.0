let buscador_champion = document.getElementById("input_text_champion");
let sugerencias_champion = document.getElementsByClassName("container-suggestions")[0];
let loldlecontent = document.getElementById("loldle-content");
let guess = allChampions[Math.floor(Math.random() * allChampions.length)];   
console.log(guess);

let green = "#22ff00";
let yellow = "#ffcc00";

let guesses = 0;
let inicio = document.getElementsByClassName("title")[8];
let boton = document.getElementById("buscador");
boton.addEventListener("click", guess_champion_function);


buscador_champion.addEventListener("input", function() {
    if (buscador_champion.value.length === 0){
        // sugerencias.style.opacity = "0";
        sugerencias_champion.innerHTML = '';
        return;
    }
    sugerencias_champion.innerHTML = '';
    for(let i=0; i<allChampions.length; i++){
        console.log(buscador_champion.value);
        if (filter(allChampions[i].nombre).startsWith(filter(buscador_champion.value))){
            sugerencias_champion.style.display = "block";
            sugerencias_champion.innerHTML += "<div class='sugerencia'>\n" +
                "    <div class='champion_container'>" +
                "        <img alt='champion' src=" + allChampions[i].img+ ">\n" +
                "    </div>\n" +
                "    <div class='titulo_champion_busq'>\n" +
                "        <p><b>" + allChampions[i].nombre + "</b></p>" +
                "    </div>\n" +
                "</div>"

    }}
    let sugerencia_champion = document.getElementsByClassName("sugerencia");

    for (let i=0; i<sugerencia_champion.length; i++){
        sugerencia_champion[i].addEventListener("click", function () {
            buscador_champion.value = sugerencia_champion[i].getElementsByClassName("titulo_champion_busq")[0].innerText;
            sugerencias_champion.style.display = "none";
            guess_champion_function();
        });
    }
});



// Función para filtrar los caracteres especiales
function filter(text) {
    text = text.toLowerCase();
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    text = text.replace(/\s/g, '');
    text = text.trim();
    return text;
}

function guess_champion_function() {
    loldlecontent.style.display = "grid";
    let nombre = filter(buscador_champion.value);
    buscador_champion.value = "";
    let champion = allChampions.find(champion => filter(champion.nombre) === nombre);
    
    let roles = "";
    for (i=0; i<champion.roles.length; i++){
        roles += champion.roles[i] + ", ";

    }
    roles = roles.slice(0, -2);

    let species = "";
    for (i=0; i<champion.specie.length; i++){
        species += champion.specie[i] + ", ";
    }
    species = species.slice(0, -2);

    let regions = "";
    for (i=0; i<champion.region.length; i++){
        regions += champion.region[i] + ", ";
    }
    regions = regions.slice(0, -2);
    // console.log(champion);

    create_element_function(champion, inicio, regions, species, roles);


    // ROLES Rojo: 0, Amarillo: 1, Verde: 2
    let rol = 0;
    for (i=0; i<guess.roles.length; i++){

        if (champion.roles.includes(guess.roles[i])){
            rol += 1;
        }
        break;
    }
    if ((rol == guess.roles.length) && (rol == champion.roles.length)){
        rol = 2;
    }
    else if(rol == 0){
        rol = 0;
    }
    else{
        rol = 1;
    }


    // ESPECIE Rojo: 0, Amarillo: 1, Verde: 2
    let especie = 0;
    for (i=0; i<guess.specie.length; i++){

        if (champion.specie.includes(guess.specie[i])){
            especie += 1;
        }
        break;
    }
    if (especie == guess.specie.length){
        especie = 2;
    }
    else if(especie == 0){
        especie = 0;
    }
    else{
        especie = 1;
    }

    // REGION Rojo: 0, Amarillo: 1, Verde: 2
    let region = 0;
    for (i=0; i<guess.region.length; i++){

        if (champion.region.includes(guess.region[i])){
            region += 1;
        }
        break;
    }
    if ((region == guess.region.length) && (region == champion.region.length) ){
        region = 2;
    }
    else if(region == 0){
        region = 0;
    }
    else{
        region = 1;
    }


    color_guesses(champion, rol, especie, region);

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
            document.getElementsByClassName("loldle-item")[i].style.backgroundColor = "#22ff00";
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
            document.getElementsByClassName("loldle-item")[8].style.backgroundColor = "#22ff00";
        }
        else if (champion.year < guess.year) {
            document.getElementsByClassName("loldle-item")[8].innerHTML += "<p><i class='fa-solid fa-arrow-up'></i></p>";
        }
        else {
            document.getElementsByClassName("loldle-item")[8].innerHTML += "<p><i class='fa-solid fa-arrow-down'></i></p>";
        }


    }
}

