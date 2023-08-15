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
    // console.log(champion);

    loldlecontent.innerHTML += "<div class='loldle-item'>" +
        "        <img alt='champion' src=" + champion.img+ ">\n" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.nombre + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.gender + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.roles + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.specie + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.resource + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.range + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.region + "</b></p>" +
        "    </div>\n" +
        " <div class='loldle-item'>\n" +
        "        <p><b>" + champion.year + "</b></p>" +
        "    </div>\n" 

        if (champion.img == guess.img){
            for (i=1; i<9; i++){
                document.getElementsByClassName("loldle-item")[guesses*9+i].style.backgroundColor = "#22ff00";
            }
        } else {
            if(champion.nombre == guess.nombre){
            document.getElementsByClassName("loldle-item")[guesses*9+1].style.backgroundColor = "#22ff00";
            }
            if(champion.gender == guess.gender){
                console.log(document.getElementsByClassName("loldle-item")[guesses*9+2]);
                console.log(guesses*9+2);
            document.getElementsByClassName("loldle-item")[guesses*9+2].style.backgroundColor = "#22ff00";
            }
            if(champion.roles == guess.roles){
            document.getElementsByClassName("loldle-item")[guesses*9+3].style.backgroundColor = "#22ff00";
            } else if (champion.roles.includes(guess.roles[0]) || champion.roles.includes(guess.roles[1])){
                document.getElementsByClassName("loldle-item")[guesses*9+3].style.backgroundColor = "#ffcc00";
            }
            if(champion.specie == guess.specie){
            document.getElementsByClassName("loldle-item")[guesses*9+4].style.backgroundColor = "#22ff00";
            }else if (champion.specie.includes(guess.specie[0]) || champion.specie.includes(guess.specie[1])){
                document.getElementsByClassName("loldle-item")[guesses*9+4].style.backgroundColor = "#ffcc00";
            }
            if(champion.resource == guess.resource){
            document.getElementsByClassName("loldle-item")[guesses*9+5].style.backgroundColor = "#22ff00";
            }
            if(champion.range == guess.range){
            document.getElementsByClassName("loldle-item")[guesses*9+6].style.backgroundColor = "#22ff00";
            }
            if(champion.region == guess.region){
            document.getElementsByClassName("loldle-item")[guesses*9+7].style.backgroundColor = "#22ff00";
            } else if (champion.region.includes(guess.region[0]) || champion.region.includes(guess.region[1])){
                document.getElementsByClassName("loldle-item")[guesses*9+7].style.backgroundColor = "#ffcc00";
            }
            if(champion.year == guess.year){
            document.getElementsByClassName("loldle-item")[guesses*9+8].style.backgroundColor = "#22ff00";
            }

    }
    guesses++;

    }   
    
    )
