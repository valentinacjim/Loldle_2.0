/// SKIN GAME ///

let championNames_skins = Object.keys(allSkins);
let randomChampion_skins = championNames_skins[Math.floor(Math.random() * championNames_skins.length)];
let skinsArray = allSkins[randomChampion_skins].skins;
let numberSkin = Math.floor(Math.random() * skinsArray.length);
let randomSkinName = skinsArray[numberSkin];
console.log(randomSkinName);

let champion_skin_img = document.getElementById("champion_skin_img");
champion_skin_img.src = randomSkinName[1];

let buscador_skin = document.getElementById("input_text_skin");
let sugerencias_skin = document.getElementsByClassName("container-suggestions")[3];

buscador_skin.addEventListener("input", function() {
    if (buscador_skin.value.length === 0){
        sugerencias_skin.innerHTML = '';
        return;
    }
    sugerencias_skin.innerHTML = '';
    crear_sugerencia(buscador_skin, sugerencias_skin);
    let sugerencia_skin = document.getElementsByClassName("sugerencia");

    for (let i=0; i<sugerencia_skin.length; i++){
        sugerencia_skin[i].addEventListener("click", function () {
            buscador_skin.value = sugerencia_skin[i].getElementsByClassName("titulo_champion_busq")[0].innerText;
            sugerencias_skin.style.display = "none";
            let buscador_champion_skin = document.getElementById("input_text_skin");
            if (guess_function(buscador_champion_skin, "skin_guesses", "sugerencia_skin", randomChampion_skins)){
                // document.getElementById("skin").style.display = "block";
            } 
        });
    }
});