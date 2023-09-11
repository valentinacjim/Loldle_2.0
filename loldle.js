let buscador = document.getElementById("input_text");
let sugerencias = document.getElementsByClassName("container-suggestions")[0];
let loldlecontent = document.getElementById("loldle-content");
let guess = allChampions[Math.floor(Math.random() * allChampions.length)];   
console.log(guess);


// Función para filtrar los caracteres especiales
function filter(text) {
    // console.log(text);
    text = text.toLowerCase();
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    text = text.replace(/\s/g, '');
    text = text.trim();
    return text;
}

buscador.addEventListener("input", function() {
    if (buscador.value.length === 0){
        // sugerencias.style.opacity = "0";
        sugerencias.innerHTML = '';
        return;
    }
    sugerencias.innerHTML = '';
    for(let i=0; i<allChampions.length; i++){
        console.log(buscador.value);
        if (filter(allChampions[i].nombre).startsWith(filter(buscador.value))){
            sugerencias.style.display = "block";
            sugerencias.innerHTML += "<div class='sugerencia'>\n" +
                "    <div class='champion_container'>" +
                "        <img alt='champion' src=" + allChampions[i].img+ ">\n" +
                "    </div>\n" +
                "    <div class='titulo_champion_busq'>\n" +
                "        <p><b>" + allChampions[i].nombre + "</b></p>" +
                "    </div>\n" +
                "</div>"

    }}
    let sugerencia = document.getElementsByClassName("sugerencia");

    for (let i=0; i<sugerencia.length; i++){
        console.log(sugerencia[i]);
        sugerencia[i].addEventListener("click", function () {
            // console.log(sugerencia.getElementsByClassName("titulo_champion_busq")[0].innerText);
            buscador.value = sugerencia[i].getElementsByClassName("titulo_champion_busq")[0].innerText;
            sugerencias.style.display = "none";
            // loldlecontent.style.display = "block";
        });
    }
});

let guesses = 0;
let boton = document.getElementById("buscador");
boton.addEventListener("click", function () {
    loldlecontent.style.display = "grid";
    let nombre = filter(buscador.value);
    let champion = allChampions.find(champion => filter(champion.nombre) === nombre);
    let inicio = document.getElementsByClassName("title")[8];


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

    let year_text = document.createElement("div");
    year_text.innerHTML = " <div class='loldle-item'>\n" +
    "        <p><b>" + champion.year + "</b></p>" +
    "    </div>\n" ;

    inicio.after(year_text);

    let region_text = document.createElement("div");
    region_text.innerHTML =  " <div class='loldle-item'>\n" +
    "        <p><b>" + regions + "</b></p>" +
    "    </div>\n" ;

    inicio.after(region_text);

    let range_text = document.createElement("div");
    range_text.innerHTML =  " <div class='loldle-item'>\n" +
    "        <p><b>" + champion.range + "</b></p>" +
    "    </div>\n" ;

    inicio.after(range_text);

    let resource_text = document.createElement("div");
    resource_text.innerHTML =  " <div class='loldle-item'>\n" +
    "        <p><b>" + champion.resource + "</b></p>" +
    "    </div>\n" ;

    inicio.after(resource_text);

    let species_text = document.createElement("div");
    species_text.innerHTML =  " <div class='loldle-item'>\n" +
    "        <p><b>" + species + "</b></p>" +
    "    </div>\n" ;

    inicio.after(species_text);

    let roles_text = document.createElement("div");
    roles_text.innerHTML =  " <div class='loldle-item'>\n" +
    "        <p><b>" + roles + "</b></p>" +
    "    </div>\n" ;

    inicio.after(roles_text);

    let gender_text = document.createElement("div");
    gender_text.innerHTML =  " <div class='loldle-item'>\n" +
    "        <p><b>" + champion.gender + "</b></p>" +
        "    </div>\n" ;
    
    inicio.after(gender_text);

    let name_text = document.createElement("div");
    name_text.innerHTML =  " <div class='loldle-item'>\n" +
    "        <p><b>" + champion.nombre + "</b></p>" +
    "    </div>\n" ;

    inicio.after(name_text);

    let img_text = document.createElement("div");
    img_text.innerHTML =  " <div class='loldle-item'>\n" +
    "        <img alt='champion' src=" + champion.img+ ">\n" +
    "    </div>\n" ;

    inicio.after(img_text);


        // ROLES Rojo: 0, Amarillo: 1, Verde: 2
        let rol = 0;
        for (i=0; i<guess.roles.length; i++){

            if (champion.roles.includes(guess.roles[i])){
                rol += 1;
            }
            break;
        }
        if (rol == guess.roles.length){
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
        if (region == guess.region.length){
            region = 2;
        }
        else if(region == 0){
            region = 0;
        }
        else{
            region = 1;
        }


        if (champion.img == guess.img){
            for (i=1; i<9; i++){
                document.getElementsByClassName("loldle-item")[i].style.backgroundColor = "#22ff00";
            }
        } else {
            if(champion.nombre == guess.nombre){
            document.getElementsByClassName("loldle-item")[1].style.backgroundColor = "#22ff00";
            }
            if(champion.gender == guess.gender){
            document.getElementsByClassName("loldle-item")[2].style.backgroundColor = "#22ff00";
            }
            if(rol == 2){
                document.getElementsByClassName("loldle-item")[3].style.backgroundColor = "#22ff00";
            } else if (rol == 1){
                document.getElementsByClassName("loldle-item")[3].style.backgroundColor = "#ffcc00";          
            }
            if(especie == 2){
                document.getElementsByClassName("loldle-item")[4].style.backgroundColor = "#22ff00";
            } else if (especie == 1){
                document.getElementsByClassName("loldle-item")[4].style.backgroundColor = "#ffcc00";
            }
            if(champion.resource == guess.resource){
            document.getElementsByClassName("loldle-item")[5].style.backgroundColor = "#22ff00";
            }
            if(champion.range == guess.range){
            document.getElementsByClassName("loldle-item")[6].style.backgroundColor = "#22ff00";
            }
            if(region == 2){
                document.getElementsByClassName("loldle-item")[7].style.backgroundColor = "#22ff00";
            } else if (region == 1){
                document.getElementsByClassName("loldle-item")[7].style.backgroundColor = "#ffcc00";
            }
            if(champion.year == guess.year){
            document.getElementsByClassName("loldle-item")[8].style.backgroundColor = "#22ff00";
            }
            else if(champion.year < guess.year){
                document.getElementsByClassName("loldle-item")[8].innerHTML += "<p><i class='fa-solid fa-arrow-up'></i></p>";
            }
            else{
                document.getElementsByClassName("loldle-item")[8].innerHTML += "<p><i class='fa-solid fa-arrow-down'></i></p>";
            }
            

    }

    }   
    
    )
