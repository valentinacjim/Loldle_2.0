const allChampions = [
    {
        nombre: "Aatrox",
        gender: "Male",
        roles: ["Top"],
        specie: ["Darkin"],
        resource: "Manaless",
        range: "Melee",
        region: ["Runeterra", "Shurima"],
        year: "2013",
        img: "Images/Campeones/RiotX_ChampionList_aatrox.jpg"
    },
    {
        nombre: "Ahri",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Vastayan"],
        resource: "Mana ",
        range: "Ranged",
        region: ["Ionia"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_ahri.jpg"
    },
    {
        nombre: "Akali",
        gender: "Female",
        roles: ["Middle", "Top"],
        specie: ["Human"],
        resource: "Energy",
        range: "Melee",
        region: ["Ionia"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_akali.jpg"
    },
    {
        nombre: "Akshan",
        gender: "Male",
        roles: ["Middle", "Top"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shurima"],
        year: "2021",
        img: "Images/Campeones/RiotX_ChampionList_akshan.jpg"
    },
    {
        nombre: "Alistar",
        gender: "Male",
        roles: ["Support"],
        specie: ["Minotaur"],
        resource: "Mana",
        range: "Melee",
        region: ["Runeterra"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_alistar.jpg"
    },
    {
        nombre: "Amumu",
        gender: "Male",
        roles: ["Jungle", "Support"],
        specie: ["Undead", "Yordle"],
        resource: "Mana",
        range: "Melee",
        region: ["Shurima"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_amumu.jpg"
    },
    {
        nombre: "Anivia",
        gender: "Female",
        roles: ["Middle"],
        specie: ["God", "Spirit"],
        resource: "Mana",
        range: "Ranged",
        region: ["Freljord"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_anivia.jpg"
    },
    {
        nombre: "Annie",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Noxus", "Runeterra"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_annie.jpg"
    },
    {
        nombre: "Aphelios",
        gender: "Male",
        roles: ["Bottom"],
        specie: ["Human", "Spiritualist"],
        resource: "Mana",
        range: "Ranged",
        region: ["Targon"],
        year: "2019",
        img: "Images/Campeones/RiotX_ChampionList_aphelios.jpg"
    },
    {
        nombre: "Ashe",
        gender: "Female",
        roles: ["Bottom", "Support"],
        specie: ["Human", "Iceborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Freljord"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_ashe.jpg"
    },
    {
        nombre: "Aurelion Sol",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Celestial", "Dragon"],
        resource: "Mana",
        range: "Ranged",
        region: ["Runeterra", "Targon"],
        year: "2016",
        img: "Images/Campeones/RiotX_ChampionList_aurelionsol.jpg"
    },
    {
        nombre: "Azir",
        gender: "Male",
        roles: ["Middle"],
        specie: ["God-warrior"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shurima"],
        year: "2014",
        img: "Images/Campeones/RiotX_ChampionList_azir.jpg"
    },
    {
        nombre: "Bard",
        gender: "Male",
        roles: ["Support"],
        specie: ["Celestial"],
        resource: "Mana",
        range: "Ranged",
        region: ["Runeterra"],
        year: "2015",
        img: "Images/Campeones/RiotX_ChampionList_bard.jpg"
    },
    {
        nombre: "Bel'Veth",
        gender: "Female",
        roles: ["Jungle"],
        specie: ["Void-being"],
        resource: "Manaless",
        range: "Melee",
        region: ["Void"],
        year: "2022",
        img: "Images/Campeones/RiotX_ChampionList_belveth.jpg"
    },
    {
        nombre: "Blitzcrank",
        gender: "Other",
        roles: ["Support"],
        specie: ["Golem"],
        resource: "Mana",
        range: "Melee",
        region: ["Zaun"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_blitzcrank.jpg"
    },
    {
        nombre: "Brand",
        gender: "Male",
        roles: ["Support"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Ranged",
        region: ["Runeterra"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_brand.jpg"
    },
    {
        nombre: "Braum",
        gender: "Male",
        roles: ["Support"],
        specie: ["Human", "Iceborn"],
        resource: "Mana",
        range: "Melee",
        region: ["Freljord"],
        year: "2014",
        img: "Images/Campeones/RiotX_ChampionList_braum.jpg"
    },
    {
        nombre: "Briar",
        gender: "Female",
        roles: ["Jungle"],
        specie: ["Ghoul"],
        resource: "Health costs",
        range: "Melee",
        region: ["Noxus"],
        year: "2023",
        img: "Images/Campeones/RiotX_ChampionList_briar.jpg"


    },
    {
        nombre: "Caitlyn",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Piltover"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_caitlyn.jpg"
    },
    {
        nombre: "Camille",
        gender: "Female",
        roles: ["Top"],
        specie: ["Cyborg", "Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Piltover"],
        year: "2016",
        img: "Images/Campeones/RiotX_ChampionList_camille.jpg"
    },
    {
        nombre: "Cassiopeia",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Ranged",
        region: ["Noxus", "Shurima"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_cassiopeia.jpg"
    },
    {
        nombre: "Cho'Gath",
        gender: "Male",
        roles: ["Top"],
        specie: ["Void-Being"],
        resource: "Mana",
        range: "Melee",
        region: ["Void"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_chogath.jpg"
    },
    {
        nombre: "Corki",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bandle City"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_corki.jpg"
    },
    {
        nombre: "Darius",
        gender: "Male",
        roles: ["Top"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Noxus"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_darius.jpg"
    },
    {
        nombre: "Diana",
        gender: "Female",
        roles: ["Jungle", "Middle"],
        specie: ["Aspect", "Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Targon"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_diana.jpg"
    },
    {
        nombre: "Dr. Mundo",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["Chemically Altered", "Human"],
        resource: "Health costs",
        range: "Melee",
        region: ["Zaun"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_drmundo.jpg"
    },
    {
        nombre: "Draven",
        gender: "Male",
        roles: ["Bottom"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Noxus"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_draven.jpg"
    },
    {
        nombre: "Ekko",
        gender: "Male",
        roles: ["Jungle", "Middle"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Zaun"],
        year: "2015",
        img: "Images/Campeones/RiotX_ChampionList_ekko.jpg"
    },
    {
        nombre: "Elise",
        gender: "Female",
        roles: ["Jungle"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Melee-Ranged",
        region: ["Noxus", "Shadow Isles"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_elise.jpg"
    },
    {
        nombre: "Evelynn",
        gender: "Female",
        roles: ["Jungle"],
        specie: ["Demon", "Spirit"],
        resource: "Mana",
        range: "Melee",
        region: ["Runeterra"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_evelynn.jpg"
    },
    {
        nombre: "Ezreal",
        gender: "Male",
        roles: ["Bottom"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Piltover"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_ezreal.jpg"
    },
    {
        nombre: "Fiddlesticks",
        gender: "Other",
        roles: ["Jungle"],
        specie: ["Demon", "Spirit"],
        resource: "Mana",
        range: "Ranged",
        region: ["Runeterra"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_fiddlesticks.jpg"
    },
    {
        nombre: "Fiora",
        gender: "Female",
        roles: ["Top"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Demacia"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_fiora.jpg"
    },
    {
        nombre: "Fizz",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Melee",
        region: ["Bilgewater"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_fizz.jpg"
    },
    {
        nombre: "Miss Fortune",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bilgewater"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_missfortune.jpg"
    },
    {
        nombre: "Twisted Fate",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bilgewater"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_twistedfate.jpg"
    },
    {
        nombre: "Galio",
        gender: "Male",
        roles: ["Middle", "Support"],
        specie: ["Golem"],
        resource: "Mana",
        range: "Melee",
        region: ["Demacia"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_galio.jpg"
    },
    {
        nombre: "Gangplank",
        gender: "Male",
        roles: ["Top"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Bilgewater"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_gangplank.jpg"
    },
    {
        nombre: "Garen",
        gender: "Male",
        roles: ["Top"],
        specie: ["Human"],
        resource: "Manaless",
        range: "Melee",
        region: ["Demacia"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_garen.jpg"
    },
    {
        nombre: "Gnar",
        gender: "Male",
        roles: ["Top"],
        specie: ["Yordle"],
        resource: "Rage",
        range: "Melee-Ranged",
        region: ["Freljord"],
        year: "2014",
        img: "Images/Campeones/RiotX_ChampionList_gnar.jpg"
    },
    {
        nombre: "Gragas",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Freljord"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_gragas.jpg"
    },
    {
        nombre: "Graves",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bilgewater"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_graves.jpg"
    },
    {
        nombre: "Gwen",
        gender: "Female",
        roles: ["Top"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Melee",
        region: ["Camavor", "Shadow Isles"],
        year: "2021",
        img: "Images/Campeones/RiotX_ChampionList_gwen.jpg"
    },
    {
        nombre: "Renata Glasc",
        gender: "Female",
        roles: ["Support"],
        specie: ["Chemically Altered", "Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Zaun"],
        year: "2022",
        img: "Images/Campeones/RiotX_ChampionList_renata_glasc.jpg"
    },
    {
        nombre: "Hecarim",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Undead"],
        resource: "Mana",
        range: "Melee",
        region: ["Camavor", "Shadow Isles"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_hecarim.jpg"
    },
    {
        nombre: "Heimerdinger",
        gender: "Male",
        roles: ["Middle", "Top"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Ranged",
        region: ["Piltover"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_heimerdinger.jpg"
    },
    {
        nombre: "Illaoi",
        gender: "Female",
        roles: ["Top"],
        specie: ["Human", "Spiritualist"],
        resource: "Mana",
        range: "Melee",
        region: ["Bilgewater"],
        year: "2015",
        img: "Images/Campeones/RiotX_ChampionList_illaoi.jpg"
    },
    {
        nombre: "Irelia",
        gender: "Female",
        roles: ["Middle", "Top"],
        specie: ["Human", "Spiritualist"],
        resource: "Mana",
        range: "Melee",
        region: ["Ionia"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_irelia.jpg"
    },
    {
        nombre: "Ivern",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Ranged",
        region: ["Freljord", "Ionia"],
        year: "2016",
        img: "Images/Campeones/RiotX_ChampionList_ivern.jpg"
    },
    {
        nombre: "Jarvan IV",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Demacia"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_jarvaniv.jpg"
    },
    {
        nombre: "Janna",
        gender: "Female",
        roles: ["Support"],
        specie: ["God", "Spirit"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shurima", "Zaun"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_janna.jpg"
    },
    {
        nombre: "Jax",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["Unkown"],
        resource: "Mana",
        range: "Melee",
        region: ["Icathia", "Runeterra", "Shurima"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_jax.jpg"
    },
    {
        nombre: "Jayce",
        gender: "Male",
        roles: ["Middle", "Top"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee-Ranged",
        region: ["Piltover"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_jayce.jpg"
    },
    {
        nombre: "Jhin",
        gender: "Male",
        roles: ["Bottom"],
        specie: ["Human", "Spiritualist"],
        resource: "Mana",
        range: "Ranged",
        region: ["Ionia"],
        year: "2016",
        img: "Images/Campeones/RiotX_ChampionList_jhin.jpg"
    },
    {
        nombre: "Jinx",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Chemically Altered", "Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Zaun"],
        year: "2013",
        img: "Images/Campeones/RiotX_ChampionList_jinx.jpg"
    },
    {
        nombre: "K'Sante",
        gender: "Male",
        roles: ["Top"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Shurima"],
        year: "2022",
        img: "Images/Campeones/RiotX_ChampionList_ksante.jpg"
    },
    {
        nombre: "Kai'Sa",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Human", "Void-Being"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shurima", "Void"],
        year: "2018",
        img: "Images/Campeones/RiotX_ChampionList_kaisa.jpg"
    },
    {
        nombre: "Kalista",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Undead"],
        resource: "Mana",
        range: "Ranged",
        region: ["Camavor", "Shadow Isles"],
        year: "2014",
        img: "Images/Campeones/RiotX_ChampionList_kalista.jpg"
    },
    {
        nombre: "Karma",
        gender: "Female",
        roles: ["Support"],
        specie: ["Human", "Spiritualist"],
        resource: "Mana",
        range: "Ranged",
        region: ["Ionia"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_karma.jpg"
    },
    {
        nombre: "Karthus",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Undead"],
        resource: "Mana",
        range: "Ranged",
        region: ["Noxus", "Shadow Isles"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_karthus.jpg"
    },
    {
        nombre: "Kassadin",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Human", "Void-Being"],
        resource: "Mana",
        range: "Melee",
        region: ["Shurima", "Void"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_kassadin.jpg"
    },
    {
        nombre: "Katarina",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Human"],
        resource: "Manaless",
        range: "Melee",
        region: ["Noxus"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_katarina.jpg"
    },
    {
        nombre: "Kayle",
        gender: "Female",
        roles: ["Top"],
        specie: ["Aspect", "Human", "Magically Altered"],
        resource: "Mana",
        range: "Melee-Ranged",
        region: ["Demacia", "Targon"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_kayle.jpg"
    },
    {
        nombre: "Kayn",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Darkin", "Human", "Magically Altered"],
        resource: "Mana",
        range: "Melee",
        region: ["Ionia", "Noxus", "Runeterra", "Shurima"],
        year: "2017",
        img: "Images/Campeones/RiotX_ChampionList_kayn.jpg"
    },
    {
        nombre: "Kennen",
        gender: "Male",
        roles: ["Top"],
        specie: ["Yordle"],
        resource: "Energy",
        range: "Ranged",
        region: ["Ionia"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_kennen.jpg"
    },
    {
        nombre: "Kha'Zix",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Void-being"],
        resource: "Mana",
        range: "Melee",
        region: ["Void"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_khazix.jpg"
    },
    {
        nombre: "Kindred",
        gender: "Other",
        roles: ["Jungle"],
        specie: ["God", "Spirit"],
        resource: "Mana",
        range: "Ranged",
        region: ["Runeterra"],
        year: "2015",
        img: "Images/Campeones/RiotX_ChampionList_kindred.jpg"
    },
    {
        nombre: "Kled",
        gender: "Male",
        roles: ["Top"],
        specie: ["Yordle"],
        resource: "Courage",
        range: "Melee",
        region: ["Noxus"],
        year: "2016",
        img: "Images/Campeones/RiotX_ChampionList_kled.jpg"
    },
    {
        nombre: "Kog'Maw",
        gender: "Male",
        roles: ["Bottom"],
        specie: ["Void-being"],
        resource: "Mana",
        range: "Ranged",
        region: ["Void"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_kogmaw.jpg"
    },
    {
        nombre: "Tahm Kench",
        gender: "Male",
        roles: ["Support", "Top"],
        specie: ["Demon", "Spirit"],
        resource: "Mana",
        range: "Melee",
        region: ["Bilgewater", "Runeterra"],
        year: "2015",
        img: "Images/Campeones/RiotX_ChampionList_tahmkench.jpg"
    },
    {
        nombre: "LeBlanc",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Ranged",
        region: ["Noxus"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_leblanc.jpg"
    },
    {
        nombre: "Lee Sin",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Human", "Spiritualist"],
        resource: "Energy",
        range: "Melee",
        region: ["Ionia"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_leesin.jpg"
    },
    {
        nombre: "Leona",
        gender: "Female",
        roles: ["Support"],
        specie: ["Aspect", "Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Targon"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_leona.jpg"
    },
    {
        nombre: "Lillia",
        gender: "Female",
        roles: ["Jungle", "Top"],
        specie: ["Spirit"],
        resource: "Mana",
        range: "Melee",
        region: ["Ionia"],
        year: "2020",
        img: "Images/Campeones/RiotX_ChampionList_lillia.jpg"
    },
    {
        nombre: "Lissandra",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Human", "Iceborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Frejlord"],
        year: "2013",
        img: "Images/Campeones/RiotX_ChampionList_lissandra.jpg"
    },
    {
        nombre: "Lucian",
        gender: "Male",
        roles: ["Bottom"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Demacia", "Shadow Isles"],
        year: "2013",
        img: "Images/Campeones/RiotX_ChampionList_lucian.jpg"
    },
    {
        nombre: "Lulu",
        gender: "Female",
        roles: ["Support"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bandle City"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_lulu.jpg"
    },
    {
        nombre: "Lux",
        gender: "Female",
        roles: ["Middle", "Support"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Demacia"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_lux.jpg"
    },
    {
        nombre: "Malphite",
        gender: "Male",
        roles: ["Top"],
        specie: ["Golem"],
        resource: "Mana",
        range: "Melee",
        region: ["Ixtal", "Shurima"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_malphite.jpg"
    },
    {
        nombre: "Malzahar",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Human", "Void-Being"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shurima", "Void"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_malzahar.jpg"
    },
    {
        nombre: "Maokai",
        gender: "Male",
        roles: ["Jungle", "Support"],
        specie: ["Spirit"],
        resource: "Mana",
        range: "Melee",
        region: ["Shadow Isles"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_maokai.jpg"
    },
    {
        nombre: "Master Yi",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Human", "Spiritualist"],
        resource: "Mana",
        range: "Melee",
        region: ["Ionia"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_masteryi.jpg"
    },
    {
        nombre: "Milio",
        gender: "Male",
        roles: ["Support"],
        species: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Ixtal"],
        year: "2023",
        img: "Images/Campeones/RiotX_ChampionList_milio.jpg"
    },
    {
        nombre: "Mordekaiser",
        gender: "Male",
        roles: ["Top"],
        specie: ["Revenant"],
        resource: "Shield",
        range: "Melee",
        region: ["Noxus"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_mordekaiser.jpg"
    },
    {
        nombre: "Morgana",
        gender: "Female",
        roles: ["Support"],
        specie: ["Aspect", "Human", "Magically Altered"],
        resource: "Mana",
        range: "Ranged",
        region: ["Demacia", "Targon"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_morgana.jpg"
    },
    {
        nombre: "Naafiri",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Darkin", "Dog"],
        resource: "Mana",
        range: "Melee",
        region: ["Shurima"],
        year: "2023",
        img: "Images/Campeones/RiotX_ChampionList_naafiri.jpg"
    },
    {
        nombre: "Nami",
        gender: "Female",
        roles: ["Support"],
        specie: ["Vastayan"],
        resource: "Mana",
        range: "Ranged",
        region: ["Runeterra"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_nami.jpg"
    },
    {
        nombre: "Nasus",
        gender: "Male",
        roles: ["Top"],
        specie: ["God-warrior"],
        resource: "Mana",
        range: "Melee",
        region: ["Shurima"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_nasus.jpg"
    },
    {
        nombre: "Nautilus",
        gender: "Male",
        roles: ["Support"],
        specie: ["Revenant"],
        resource: "Mana",
        range: "Melee",
        region: ["Bilgewater"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_nautilus.jpg"
    },
    {
        nombre: "Neeko",
        gender: "Female",
        roles: ["Middle", "Support"],
        specie: ["Vastayan"],
        resource: "Mana",
        range: "Ranged",
        region: ["Ixtal"],
        year: "2018",
        img: "Images/Campeones/RiotX_ChampionList_neeko.jpg"
    },
    {
        nombre: "Nidalee",
        gender: "Female",
        roles: ["Jungle"],
        specie: ["Human", "Spiritualist"],
        resource: "Mana",
        range: "Melee-Ranged",
        region: ["Ixtal"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_nidalee.jpg"
    },
    {
        nombre: "Nilah",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Melee",
        region: ["Bilgewater"],
        year: "2022",
        img: "Images/Campeones/RiotX_ChampionList_nilah.jpg"
    },
    {
        nombre: "Nocturne",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Demon", "Spirit"],
        resource: "Mana",
        range: "Melee",
        region: ["Runeterra"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_nocturne.jpg"
    },
    {
        nombre: "Nunu & Willump",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Human", "Yeti"],
        resource: "Mana",
        range: "Melee",
        region: ["Frejlord"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_nunu.jpg"
    },
    {
        nombre: "Olaf",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["Human", "Iceborn"],
        resource: "Mana",
        range: "Melee",
        region: ["Frejlord"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_olaf.jpg"
    },
    {
        nombre: "Orianna",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Golem"],
        resource: "Mana",
        range: "Ranged",
        region: ["Piltover"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_orianna.jpg"
    },
    {
        nombre: "Ornn",
        gender: "Male",
        roles: ["Top"],
        specie: ["God", "Spirit"],
        resource: "Mana",
        range: "Melee",
        region: ["Frejlord"],
        year: "2017",
        img: "Images/Campeones/RiotX_ChampionList_ornn.jpg"
    },
    {
        nombre: "Pantheon",
        gender: "Male",
        roles: ["Jungle", "Middle", "Support"],
        specie: ["Aspect", "Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Targon"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_pantheon.jpg"
    },
    {
        nombre: "Poppy",
        gender: "Female",
        roles: ["Jungle", "Top"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Melee",
        region: ["Demacia"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_poppy.jpg"
    },
    {
        nombre: "Pyke",
        gender: "Male",
        roles: ["Support"],
        specie: ["Revenant"],
        resource: "Mana",
        range: "Melee",
        region: ["Bilgewater"],
        year: "2018",
        img: "Images/Campeones/RiotX_ChampionList_pyke.jpg"
    },
    {
        nombre: "Qiyana",
        gender: "Female",
        roles: ["Jungle", "Middle"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Melee",
        region: ["Ixtal"],
        year: "2019",
        img: "Images/Campeones/RiotX_ChampionList_qiyana.jpg"
    },
    {
        nombre: "Quinn",
        gender: "Female",
        roles: ["Top"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Demacia"],
        year: "2013",
        img: "Images/Campeones/RiotX_ChampionList_quinn.jpg"
    },
    {
        nombre: "Rakan",
        gender: "Male",
        roles: ["Support"],
        specie: ["Vastayan"],
        resource: "Mana",
        range: "Melee",
        region: ["Ionia"],
        year: "2017",
        img: "Images/Campeones/RiotX_ChampionList_rakan.jpg"
    },
    {
        nombre: "Rammus",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["God-warrior"],
        resource: "Mana",
        range: "Melee",
        region: ["Shurima"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_rammus.jpg"
    },
    {
        nombre: "Rek'Sai",
        gender: "Female",
        roles: ["Jungle"],
        specie: ["Void-being"],
        resource: "Rage",
        range: "Melee",
        region: ["Shurima", "Void"],
        year: "2014",
        img: "Images/Campeones/RiotX_ChampionList_reksai.jpg"
    },
    {
        nombre: "Rell",
        gender: "Female",
        roles: ["Support"],
        specie: ["Human", "Magically Altered", "Magicborn"],
        resource: "Mana",
        range: "Melee",
        region: ["Noxus"],
        year: "2020",
        img: "Images/Campeones/RiotX_ChampionList_rell.jpg"
    },
    {
        nombre: "Renekton",
        gender: "Male",
        roles: ["Top"],
        specie: ["God-warrior"],
        resource: "Fury",
        range: "Melee",
        region: ["Shurima"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_renekton.jpg"
    },
    {
        nombre: "Rengar",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["Vastayan"],
        resource: "Ferocity",
        range: "Melee",
        region: ["Ixtal", "Shurima"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_rengar.jpg"
    },
    {
        nombre: "Riven",
        gender: "Female",
        roles: ["Top"],
        specie: ["Human"],
        resource: "Manaless",
        range: "Melee",
        region: ["Ionia", "Noxus"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_riven.jpg"
    },
    {
        nombre: "Rumble",
        gender: "Male",
        roles: ["Middle", "Top"],
        specie: ["Yordle"],
        resource: "Heat",
        range: "Melee",
        region: ["Bandle City"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_rumble.jpg"
    },
    {
        nombre: "Ryze",
        gender: "Male",
        roles: ["Middle", "Top"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Ranged",
        region: ["Runeterra"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_ryze.jpg"
    },
    {
        nombre: "Samira",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Noxus", "Shurima"],
        year: "2020",
        img: "Images/Campeones/RiotX_ChampionList_samira.jpg"
    },
    {
        nombre: "Sejuani",
        gender: "Female",
        roles: ["Jungle", "Top"],
        specie: ["Human", "Iceborn"],
        resource: "Mana",
        range: "Melee",
        region: ["Frejlord"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_sejuani.jpg"
    },
    {
        nombre: "Senna",
        gender: "Female",
        roles: ["Support"],
        specie: ["Human", "Undead"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shadow Isles"],
        year: "2019",
        img: "Images/Campeones/RiotX_ChampionList_senna.jpg"
    },
    {
        nombre: "Seraphine",
        gender: "Female",
        roles: ["Support"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Piltover", "Zaun"],
        year: "2020",
        img: "Images/Campeones/RiotX_ChampionList_seraphine.jpg"
    },
    {
        nombre: "Sett",
        gender: "Male",
        roles: ["Top"],
        specie: ["Human", "Vastayan"],
        resource: "Grit",
        range: "Melee",
        region: ["Ionia"],
        year: "2020",
        img: "Images/Campeones/RiotX_ChampionList_sett.jpg"
    },
    {
        nombre: "Shaco",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Spirit"],
        resource: "Mana",
        range: "Melee",
        region: ["Runeterra"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_shaco.jpg"
    },
    {
        nombre: "Shen",
        gender: "Male",
        roles: ["Top"],
        specie: ["Human", "Spiritualist"],
        resource: "Energy",
        range: "Melee",
        region: ["Ionia"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_shen.jpg"
    },
    {
        nombre: "Shyvana",
        gender: "Female",
        roles: ["Jungle"],
        specie: ["Demon", "Magically Altered"],
        resource: "Fury",
        range: "Melee",
        region: ["Demacia"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_shyvana.jpg"
    },
    {
        nombre: "Singed",
        gender: "Male",
        roles: ["Top"],
        specie: ["Chemically Altered", "Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Piltover", "Zaun"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_singed.jpg"
    },
    {
        nombre: "Sion",
        gender: "Male",
        roles: ["Top"],
        specie: ["Revenant"],
        resource: "Mana",
        range: "Melee",
        region: ["Noxus"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_sion.jpg"
    },
    {
        nombre: "Sivir",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shurima"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_sivir.jpg"
    },
    {
        nombre: "Skarner",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Brackern"],
        resource: "Mana",
        range: "Melee",
        region: ["Shurima"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_skarner.jpg"
    },
    {
        nombre: "Sona",
        gender: "Female",
        roles: ["Support"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Demacia", "Ionia"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_sona.jpg"
    },
    {
        nombre: "Soraka",
        gender: "Female",
        roles: ["Support"],
        specie: ["Celestial"],
        resource: "Mana",
        range: "Ranged",
        region: ["Ionia", "Targon"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_soraka.jpg"
    },
    {
        nombre: "Swain",
        gender: "Male",
        roles: ["Middle", "Support"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Ranged",
        region: ["Noxus"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_swain.jpg"
    },
    {
        nombre: "Sylas",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Melee",
        region: ["Demacia", "Freljord"],
        year: "2019",
        img: "Images/Campeones/RiotX_ChampionList_sylas.jpg"
    },
    {
        nombre: "Syndra",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Ionia"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_syndra.jpg"
    },
    {
        nombre: "Taliyah",
        gender: "Female",
        roles: ["Jungle", "Middle"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shurima"],
        year: "2016",
        img: "Images/Campeones/RiotX_ChampionList_taliyah.jpg"
    },
    {
        nombre: "Talon",
        gender: "Male",
        roles: ["Jungle", "Middle"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Noxus"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_talon.jpg"
    },
    {
        nombre: "Taric",
        gender: "Male",
        roles: ["Support"],
        specie: ["Aspect", "Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Demacia", "Targon"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_taric.jpg"
    },
    {
        nombre: "Teemo",
        gender: "Male",
        roles: ["Top"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bandle City"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_teemo.jpg"
    },
    {
        nombre: "Thresh",
        gender: "Male",
        roles: ["Support"],
        specie: ["Undead"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shadow Isles"],
        year: "2013",
        img: "Images/Campeones/RiotX_ChampionList_thresh.jpg"
    },
    {
        nombre: "Tristana",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bandle City"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_tristana.jpg"
    },
    {
        nombre: "Trundle",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["Iceborn", "Troll"],
        resource: "Mana",
        range: "Melee",
        region: ["Freljord"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_trundle.jpg"
    },
    {
        nombre: "Tryndamere",
        gender: "Male",
        roles: ["Top"],
        specie: ["Human", "Magically Altered"],
        resource: "Fury",
        range: "Melee",
        region: ["Freljord"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_tryndamere.jpg"
    },
    {
        nombre: "Twitch",
        gender: "Male",
        roles: ["Bottom"],
        specie: ["Chemically Altered", "Rat"],
        resource: "Mana",
        range: "Ranged",
        region: ["Zaun"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_twitch.jpg"
    },
    {
        nombre: "Udyr",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["Human", "Spiritualist"],
        resource: "Mana",
        range: "Melee",
        region: ["Freljord", "Ionia"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_udyr.jpg"
    },
    {
        nombre: "Urgot",
        gender: "Male",
        roles: ["Top"],
        specie: ["Chemically Altered", "Cyborg", "Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Noxus", "Zaun"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_urgot.jpg"
    },
    {
        nombre: "Varus",
        gender: "Male",
        roles: ["Bottom", "Middle"],
        specie: ["Darkin", "Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Ionia", "Runeterra", "Shurima"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_varus.jpg"
    },
    {
        nombre: "Vayne",
        gender: "Female",
        roles: ["Bottom", "Top"],
        specie: ["Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Demacia"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_vayne.jpg"
    },
    {
        nombre: "Veigar",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bandle City", "Runeterra"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_veigar.jpg"
    },
    {
        nombre: "Vel'Koz",
        gender: "Male",
        roles: ["Middle", "Support"],
        specie: ["Void-being"],
        resource: "Mana",
        range: "Ranged",
        region: ["Void"],
        year: "2014",
        img: "Images/Campeones/RiotX_ChampionList_velkoz.jpg"
    },
    {
        nombre: "Vex",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bandle City", "Shadow Isles"],
        year: "2021",
        img: "Images/Campeones/RiotX_ChampionList_vex.jpg"
    },
    {
        nombre: "Vi",
        gender: "Female",
        roles: ["Jungle"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Piltover", "Zaun"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_vi.jpg"
    },
    {
        nombre: "Viego",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Undead"],
        resource: "Manaless",
        range: "Melee",
        region: ["Camavor", "Shadow Isles"],
        year: "2021",
        img: "Images/Campeones/RiotX_ChampionList_viego.jpg"
    },
    {
        nombre: "Viktor",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Cyborg", "Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Piltover", "Zaun"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_viktor.jpg"
    },
    {
        nombre: "Vladimir",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Human", "Magically Altered"],
        resource: "Bloodthirst",
        range: "Ranged",
        region: ["Camavor", "Noxus", "Shadow Isles"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_vladimir.jpg"
    },
    {
        nombre: "Volibear",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["God", "Spirit"],
        resource: "Mana",
        range: "Melee",
        region: ["Freljord"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_volibear.jpg"
    },
    {
        nombre: "Warwick",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["Chemically Altered", "Cyborg", "Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Zaun"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_warwick.jpg"
    },
    {
        nombre: "Wukong",
        gender: "Male",
        roles: ["Jungle", "Top"],
        specie: ["Vastayan"],
        resource: "Mana",
        range: "Melee",
        region: ["Ionia"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_wukong.jpg"
    },
    {
        nombre: "Xayah",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Vastayan"],
        resource: "Mana",
        range: "Ranged",
        region: ["Ionia"],
        year: "2017",
        img: "Images/Campeones/RiotX_ChampionList_xayah.jpg"
    },
    {
        nombre: "Xerath",
        gender: "Male",
        roles: ["Middle", "Support"],
        specie: ["God-warrior"],
        resource: "Mana",
        range: "Ranged",
        region: ["Shurima"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_xeratth.jpg"
    },
    {
        nombre: "Xin Zhao",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Human"],
        resource: "Mana",
        range: "Melee",
        region: ["Demacia", "Ionia", "Noxus"],
        year: "2010",
        img: "Images/Campeones/RiotX_ChampionList_xinzhao.jpg"
    },
    {
        nombre: "Yasuo",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Human", "Magicborn"],
        resource: "Flow",
        range: "Melee",
        region: ["Ionia"],
        year: "2013",
        img: "Images/Campeones/RiotX_ChampionList_yasuo.jpg"
    },
    {
        nombre: "Yone",
        gender: "Male",
        roles: ["Middle", "Top"],
        specie: ["Human", "Magically Altered"],
        resource: "Manaless",
        range: "Melee",
        region: ["Ionia"],
        year: "2020",
        img: "Images/Campeones/RiotX_ChampionList_yone.jpg"
    },
    {
        nombre: "Yorick",
        gender: "Male",
        roles: ["Top"],
        specie: ["Human", "Magically Altered"],
        resource: "Mana",
        range: "Melee",
        region: ["Shadow Isles"],
        year: "2011",
        img: "Images/Campeones/RiotX_ChampionList_yorick.jpg"
    },
    {
        nombre: "Yuumi",
        gender: "Female",
        roles: ["Support"],
        specie: ["Cat", "Magically Altered"],
        resource: "Mana",
        range: "Ranged",
        region: ["Bandle City"],
        year: "2019",
        img: "Images/Campeones/RiotX_ChampionList_yuumi.jpg"
    },
    {
        nombre: "Zac",
        gender: "Male",
        roles: ["Jungle"],
        specie: ["Golem"],
        resource: "Health costs",
        range: "Melee",
        region: ["Zaun"],
        year: "2013",
        img: "Images/Campeones/RiotX_ChampionList_zac.jpg"
    },
    {
        nombre: "Zed",
        gender: "Male",
        roles: ["Middle"],
        specie: ["Human", "Magically Altered"],
        resource: "Energy",
        range: "Melee",
        region: ["Ionia"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_zed.jpg"
    },
    {
        nombre: "Zeri",
        gender: "Female",
        roles: ["Bottom"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Zaun"],
        year: "2022",
        img: "Images/Campeones/RiotX_ChampionList_zoe.jpg"
    },
    {
        nombre: "Ziggs",
        gender: "Male",
        roles: ["Bottom", "Middle"],
        specie: ["Yordle"],
        resource: "Mana",
        range: "Ranged",
        region: ["Piltover", "Zaun"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_ziggs.jpg"
    },
    {
        nombre: "Zilean",
        gender: "Male",
        roles: ["Support"],
        specie: ["Human", "Magicborn"],
        resource: "Mana",
        range: "Ranged",
        region: ["Icathia", "Runeterra", "Shurima"],
        year: "2009",
        img: "Images/Campeones/RiotX_ChampionList_zilean.jpg"
    },
    {
        nombre: "Zoe",
        gender: "Female",
        roles: ["Middle"],
        specie: ["Aspect", "Human"],
        resource: "Mana",
        range: "Ranged",
        region: ["Targon"],
        year: "2017",
        img: "Images/Campeones/RiotX_ChampionList_zoe.jpg"
    },
    {
        nombre: "Zyra",
        gender: "Female",
        roles: ["Support"],
        specie: ["Unkown"],
        resource: "Mana",
        range: "Ranged",
        region: ["Ixtal"],
        year: "2012",
        img: "Images/Campeones/RiotX_ChampionList_zyra.jpg"
    }
]   


const allQuotes = [

    {
        champion: "Aatrox",
        quotes: [
            ["Now, hear the silence of annihilation!", "audio/Aatrox/Aatrox_Select.ogg"],
            ["Let me end this!", "audio/Aatrox/Aatrox_Ban.ogg"],
            ["They think me defeated, enchained. But I am unbowed... Noble is this carnage.", "audio/Aatrox/Aatrox_Quote_1.ogg"],
            ["I am your reckoner, mortals.", "audio/Aatrox/Aatrox_Quote_2.ogg"],
            ["Challenge me, mortals! I am here!", "audio/Aatrox/Aatrox_Quote_3.ogg"],
            ["Am I the abyss? Or did I gaze into it?", "audio/Aatrox/Aatrox_Quote_4.ogg"],
            ["I am not a king, I am not a god, I am... worse...", "audio/Aatrox/Aatrox_Quote_5.ogg"],
            ["I am doom!", "audio/Aatrox/Aatrox_Quote_6.ogg"],
            ["This violence shall amuse!", "audio/Aatrox/Aatrox_Quote_7.ogg"],
            ["I am the god killer!","audio/Aatrox/Aatrox_Quote_8.ogg"],
            ["You die... a fool.", "audio/Aatrox/Aatrox_Quote_9.ogg"],
        ]
    },
    {
        champion: "Ahri",
        quotes: [
            ["A clever fox is never caught.", "audio/Ahri/Ahri_Select.ogg"],
            ["You don't have to be afraid of me.", "audio/Ahri/Ahri_Ban.ogg"],
            ["I know this place... Some part of me remembers.", "audio/Ahri/Ahri_Quote_1.ogg"],
            ["I'll have them chasing their tails!", "audio/Ahri/Ahri_Quote_2.ogg"],
            ["Nature here is too quiet.", "audio/Ahri/Ahri_Quote_3.ogg"],
            ["I wander, but I'm not lost.", "audio/Ahri/Ahri_Quote_4.ogg"],
            ["I'll see everything this world has to offer.", "audio/Ahri/Ahri_Quote_5.ogg"],
            ["You're not afraid of me, are you?", "audio/Ahri/Ahri_Quote_6.ogg"],
            ["You're my prey now.", "audio/Ahri/Ahri_Quote_7.ogg"],
            ["You're mine now.", "audio/Ahri/Ahri_Quote_8.ogg"],
            ["Here I come!", "audio/Ahri/Ahri_Quote_9.ogg"],
            ["My ancestors die with me...", "audio/Ahri/Ahri_Quote_10.ogg"],
        ]
    },
    {
        champion: "Akali",
        quotes: [
            ["Fear the assassin with no master.", "audio/Akali/Akali_Select.ogg"],
            ["You're scared, good to know.", "audio/Akali/Akali_Ban.ogg"],
            ["Let's make this quick.", "audio/Akali/Akali_Quote_1.ogg"],
            ["I make problems... disappear.", "audio/Akali/Akali_Quote_2.ogg"],
            ["How about I just end this.", "audio/Akali/Akali_Quote_3.ogg"],
            ["I'll make this look like magic.", "audio/Akali/Akali_Quote_4.ogg"],
            ["Look, I don't wanna kill you... but I will.", "audio/Akali/Akali_Quote_5.ogg"],
            ["Call it a purse. I dare you.", "audio/Akali/Akali_Quote_6.ogg"],
            ["Let's have some fun.", "audio/Akali/Akali_Quote_7.ogg"],
            ["You're dead, I'm alive. See? Balance!", "audio/Akali/Akali_Quote_8.ogg"],
            ["They had it coming.", "audio/Akali/Akali_Quote_9.ogg"],
        ]
    },
    {
        champion: "Akshan",
        quotes:[
            ["Fixing the world, one scoundrel at a time!", "audio/Akshan/Akshan_Select.ogg"],
            ["I'm going to remember this.", "audio/Akshan/Akshan_Ban.ogg"],
            ["So... this is what it's like to have friends.", "audio/Akshan/Akshan_Quote_1.ogg"],
            ["Mmm, yes. Villainy is near.", "audio/Akshan/Akshan_Quote_2.ogg"],
            ["I hate shooting them in the back. I don't get to see their surprise.", "audio/Akshan/Akshan_Quote_3.ogg"],
            ["Who am I to decide who lives and dies? Huh. Just a guy.", "audio/Akshan/Akshan_Quote_4.ogg"],
            ["What else can I add to this gun? Maybe a shovel. No-a ladder!", "audio/Akshan/Akshan_Quote_5.ogg"],
            ["A friend has gone silent. Let's wake them up shall we?", "audio/Akshan/Akshan_Quote_6.ogg"],
            ["Sorry, can't let you live. You understand.", "audio/Akshan/Akshan_Quote_7.ogg"],
            ["Have a good rest?", "audio/Akshan/Akshan_Quote_8.ogg"],
            ["Now for my grand escape. Grappling hook!", "audio/Akshan/Akshan_Quote_9.ogg"]
        ]
    },
    {
        champion: "Alistar",
        quotes:[
            ["Nothing can hold me back!", "audio/Alistar/Alistar_Select.ogg"],
            ["Now I'm angry.", "audio/Alistar/Alistar_Ban.ogg"],
            ["You must follow.", "audio/Alistar/Alistar_Quote_1.ogg"],
            ["You can't milk those.", "audio/Alistar/Alistar_Quote_2.ogg"],
            ["Mess with the bull and you get the horns!", "audio/Alistar/Alistar_Quote_3.ogg"],
            ["I know the way.", "audio/Alistar/Alistar_Quote_4.ogg"]
        ]
    },
    {
        champion: "Amumu",
        quotes:[
            ["I thought you'd never pick me.", "audio/Amumu/Amumu_Select.ogg"],
            ["Aww.", "audio/Amumu/Amumu_Ban.ogg"],
            ["Let's find some friends.", "audio/Amumu/Amumu_Quote_1.ogg"],
            ["Let me give you a hug.", "audio/Amumu/Amumu_Quote_2.ogg"],
            ["Let's be friends forever.", "audio/Amumu/Amumu_Quote_3.ogg"],
            ["Come play with me.", "audio/Amumu/Amumu_Quote_4.ogg"],
            ["Hey, come back.", "audio/Amumu/Amumu_Quote_5.ogg"]
        ]
    },
    {
        champion: "Anivia",
        quotes:[
            ["On my wings.", "audio/Anivia/Anivia_Select.ogg"],
            ["I shall endure.", "audio/Anivia/Anivia_Ban.ogg"],
            ["I am neither the first, nor the last.", "audio/Anivia/Anivia_Quote_1.ogg"],
            ["I will be reborn.", "audio/Anivia/Anivia_Quote_2.ogg"],
            ["A thousand lives will I give for the Freljord.", "audio/Anivia/Anivia_Quote_3.ogg"],
            ["So young, so naive!", "audio/Anivia/Anivia_Quote_4.ogg"],
            ["The chicken or the egg? Actually I came first.", "audio/Anivia/Anivia_Quote_5.ogg"],
            ["I bring the storm.", "audio/Anivia/Anivia_Quote_6.ogg"],
            ["I am the snow, wind, and ice.", "audio/Anivia/Anivia_Quote_7.ogg"],
            ["The cycle closes.", "audio/Anivia/Anivia_Quote_8.ogg"]
        ]
    },
    {
        champion: "Annie",
        quotes:[
            ["You wanna play too? It'll be fun!", "audio/Annie/Annie_Select.ogg"],
            ["I want a turn!", "audio/Annie/Annie_Ban.ogg"],
            ["♪ Come out, come out, wherever you are! ♪", "audio/Annie/Annie_Quote_1.ogg"],
            ["Don't be a scaredy cat!", "audio/Annie/Annie_Quote_2.ogg"],
            ["Have you seen my bear Tibbers?", "audio/Annie/Annie_Quote_3.ogg"],
            ["I never play with matches.", "audio/Annie/Annie_Quote_4.ogg"],
            ["I'm rubber and you're... on fire!", "audio/Annie/Annie_Quote_5.ogg"],
            ["This is fun!", "audio/Annie/Annie_Quote_6.ogg"],
            ["Eeny, meeny, miny, burn!", "audio/Annie/Annie_Quote_7.ogg"],
            ["Don't make me hurt you!", "audio/Annie/Annie_Quote_8.ogg"],
            ["Play time!", "audio/Annie/Annie_Quote_9.ogg"]
        ]
    },
    {
        champion: "Aphelios",
        quotes:[
            ["So many weapons, Aphelios. The deadliest is your faith.", "audio/Aphelios/Aphelios_Select.ogg"],
            ["Condemned to darkness, where our power grows.", "audio/Aphelios/Aphelios_Ban.ogg"],
            ["With every step, two steps. With every breath, two breaths.", "audio/Aphelios/Aphelios_Quote_1.ogg"],
            ["Your life upon the altar, brother… I will not betray it.", "audio/Aphelios/Aphelios_Quote_2.ogg"],
            ["Again and again, I see you reach… for me.", "audio/Aphelios/Aphelios_Quote_3.ogg"],
            ["Darkness is not heresy. It lies within us all.", "audio/Aphelios/Aphelios_Quote_4.ogg"],
            ["Our destiny is hidden in the night.", "audio/Aphelios/Aphelios_Quote_5.ogg"],
            ["We're in this together. Darkness and light.", "audio/Aphelios/Aphelios_Quote_6.ogg"],
            ["We must find each other before every first light.", "audio/Aphelios/Aphelios_Quote_7.ogg"],
            ["Our faith will be tested.", "audio/Aphelios/Aphelios_Quote_8.ogg"],
            ["We hide no longer.", "audio/Aphelios/Aphelios_Quote_9.ogg"]
        ]
    },
    {
        champion: "Ashe",
        quotes:[
            ["All the world on one arrow.", "audio/Ashe/Ashe_Select.ogg"],
            ["Coward! May you die with your eyes closed.", "audio/Ashe/Ashe_Ban.ogg"],
            ["Avarosa guide me.","audio/Ashe/Ashe_Quote_1.ogg"],
            ["Do not confuse mercy for weakness.","audio/Ashe/Ashe_Quote_2.ogg"],
            ["The day our tribes are one, the world will tremble.", "audio/Ashe/Ashe_Quote_3.ogg"],
            ["Seek peace, but bring the tools of war.", "audio/Ashe/Ashe_Quote_4.ogg"],
            ["Prepare yourself, you face an Iceborn!", "audio/Ashe/Ashe_Quote_5.ogg"],
            ["Take a good look; it's the last you'll get.", "audio/Ashe/Ashe_Quote_6.ogg"],
            ["You face an Iceborn!", "audio/Ashe/Ashe_Quote_7.ogg"],
            ["My mercy has limits!", "audio/Ashe/Ashe_Quote_8.ogg"],
            ["My arrows fly true.", "audio/Ashe/Ashe_Quote_9.ogg"],
            ["This is the fury of an Iceborn!", "audio/Ashe/Ashe_Quote_10.ogg"],
            ["Arrows, fly!", "audio/Ashe/Ashe_Quote_11.ogg"],
            ["Reveal what is hidden.", "audio/Ashe/Ashe_Quote_12.ogg"],
            ["I am the bow!", "audio/Ashe/Ashe_Quote_13.ogg"],
            ["I only needed one shot.", "audio/Ashe/Ashe_Quote_14.ogg"]
        ]
    },
    {
        champion: "Aurelion Sol",
        quotes:[
            ["Naturally.", "audio/AurelionSol/AurelionSol_Select.ogg"],
            ["Hmph. Tragic.", "audio/AurelionSol/AurelionSol_Ban.ogg"],
            ["In a constantly shifting cosmos, a world this static is... refreshing.", "audio/AurelionSol/AurelionSol_Quote_1.ogg"],
            ["They call me a comet. They call me a dragon. They have no words for my true form.", "audio/AurelionSol/AurelionSol_Quote_2.ogg"],
            ["Why does anyone wish upon a star?", "audio/AurelionSol/AurelionSol_Quote_3.ogg"],
            ["I grieve for every star never born.", "audio/AurelionSol/AurelionSol_Quote_4.ogg"],
            ["My stars shine for all.", "audio/AurelionSol/AurelionSol_Quote_5.ogg"],
            ["Sometimes, the stars gaze back.", "audio/AurelionSol/AurelionSol_Quote_6.ogg"],
            ["A star's birth is as violent as it is breathtaking.", "audio/AurelionSol/AurelionSol_Quote_7.ogg"],
            ["Make a wish. See if the stars answer. I'll wait.",    "audio/AurelionSol/AurelionSol_Quote_8.ogg"],
            ["I make entropy look good.", "audio/AurelionSol/AurelionSol_Quote_9.ogg"],
            ["Defending yourself? Adorably futile.", "audio/AurelionSol/AurelionSol_Quote_10.ogg"],
            ["Plenty more to come.", "audio/AurelionSol/AurelionSol_Quote_11.ogg"],
            ["Time to gather the necessary matter!", "audio/AurelionSol/AurelionSol_Quote_12.ogg"],
        ]
    },
    {
        champion: "Azir",
        quotes:[
            ["Shurima, your emperor has returned.", "audio/Azir/Azir_Select.ogg"],
            ["Your emperor shall return.", "audio/Azir/Azir_Ban.ogg"],
            ["Shurima is where all paths converge.", "audio/Azir/Azir_Quote_1.ogg"],
            ["The world is a desert. I am the oasis.", "audio/Azir/Azir_Quote_2.ogg"],
            ["I will guide us to glory.", "audio/Azir/Azir_Quote_3.ogg"],
            ["Join me, and be elevated.", "audio/Azir/Azir_Quote_4.ogg"],
            ["No sacrifice is too great.", "audio/Azir/Azir_Quote_5.ogg"],
            ["The future will be written by the Ascended!", "audio/Azir/Azir_Quote_6.ogg"],
            ["Give yourselves to Shurima.", "audio/Azir/Azir_Quote_7.ogg"],
            ["Mine is the will of Shurima.", "audio/Azir/Azir_Quote_8.ogg"],
            ["Shurima is never lost.", "audio/Azir/Azir_Quote_9.ogg"],
            ["I am Ascended.",  "audio/Azir/Azir_Quote_10.ogg"],
            ["Nothing is beyond my reach.", "audio/Azir/Azir_Quote_11.ogg"],
            ["I will reclaim my stolen legacy!", "audio/Azir/Azir_Quote_12.ogg"],
        ]
    },
    {
        champion: "Bard",
        quotes:[
            ["Utora!", "audio/Bard/Bard_Quote.ogg"],
        ]
    },
    {
        champion: "Bel'Veth",
        quotes:[
            ["I am the voice of the silence.", "audio/BelVeth/BelVeth_Select.ogg"],
            ["We will be waiting.", "audio/BelVeth/BelVeth_Ban.ogg"],
            ["My hunger is endless. It cannot be sated, and it will not be stopped.", "audio/BelVeth/BelVeth_Quote_1.ogg"],
            ["My Runeterra will be beautiful.", "audio/BelVeth/BelVeth_Quote_2.ogg"],
            ["I crave everything.", "audio/BelVeth/BelVeth_Quote_3.ogg"],
            ["The end awaits.", "audio/BelVeth/BelVeth_Quote_4.ogg"],
            ["Consume, grow, and remake.", "audio/BelVeth/BelVeth_Quote_5.ogg"],
            ["When the void first touched existence, both were changed forever.", "audio/BelVeth/BelVeth_Quote_6.ogg"],
            ["This will be painful.", "audio/BelVeth/BelVeth_Quote_7.ogg"],
            ["My world awaits.", "audio/BelVeth/BelVeth_Quote_8.ogg"],
            ["So hungry.", "audio/BelVeth/BelVeth_Quote_9.ogg"],
            ["Too late.", "audio/BelVeth/BelVeth_Quote_10.ogg"]
        ]
    },
    {
        champion:"Blitzcrank",
        quotes:[
            ["Fired up and ready to serve.", "audio/Blitzcrank/Blitzcrank_Select.ogg"],
            ["Bone is a poor alternative.", "audio/Blitzcrank/Blitzcrank_Ban.ogg"],
            ["Precisely.", "audio/Blitzcrank/Blitzcrank_Quote_1.ogg"],
            ["Metal is harder than flesh.", "audio/Blitzcrank/Blitzcrank_Quote_2.ogg"],
            ["Exterminate. Exterminate.", "audio/Blitzcrank/Blitzcrank_Quote_3.ogg"],
            ["As long as it takes.", "audio/Blitzcrank/Blitzcrank_Quote_4.ogg"]
        ]
    },
    {
        champion:"Brand",
        quotes:[
            ["Ready to set the world on fire? Heheheh...", "audio/Brand/Brand_Select.ogg"],
            ["Going.", "audio/Brand/Brand_Ban.ogg"],
            ["This body is just one of many!", "audio/Brand/Brand_Quote_1.ogg"],
            ["Yes...", "audio/Brand/Brand_Quote_2.ogg"],
            ["The inferno begins!", "audio/Brand/Brand_Quote_3.ogg"],
            ["Forged in pain!", "audio/Brand/Brand_Quote_4.ogg"],
            ["Burn! Hahaha!", "audio/Brand/Brand_Quote_5.ogg"]
        ]
    },
    {
        champion:"Braum",
        quotes:[
            ["The heart is the strongest muscle.", "audio/Braum/Braum_Select.ogg"],
            ["Think carefully, my friend.", "audio/Braum/Braum_Ban.ogg"],
            ["Shall we begin?", "audio/Braum/Braum_Quote_1.ogg"],
            ["Ah, new beginnings.", "audio/Braum/Braum_Quote_2.ogg"],
            ["They may have many, but you have me.", "audio/Braum/Braum_Quote_3.ogg"],
            ["If they insist on a fight, I will oblige them.", "audio/Braum/Braum_Quote_4.ogg"],
            ["Follow me, friends!", "audio/Braum/Braum_Quote_5.ogg"],
            ["Let us go.", "audio/Braum/Braum_Quote_6.ogg"],
            ["Show me your best.", "audio/Braum/Braum_Quote_7.ogg"],
            ["My shield is my sword.", "audio/Braum/Braum_Quote_8.ogg"],
            ["My shield is here for you.", "audio/Braum/Braum_Quote_9.ogg"]
        ]
    },
    {
        champion: "Briar",
        quotes:[
            ["Nice to meet you! I'm hungry. I mean... Briar!", "audio/Briar/Briar_Select.ogg"],
            ["Ahh... Is this what people call 'strategy'?", "audio/Briar/Briar_Ban.ogg"],
            ["Let's see! Today, I'm going to... Climb a tree, learn the Noxian anthem, kill my enemies, and... Oh! Make a baby laugh.", "audio/Briar/Briar_Quote_1.ogg"],
            ["Is life the hunger of death...?", "audio/Briar/Briar_Quote_2.ogg"],
            ["It is not polite to nibble on friends!", "audio/Briar/Briar_Quote_3.ogg"],
            ["Food doesn't have to be blood?! Ha.", "audio/Briar/Briar_Quote_4.ogg"],
            ["PREY! WEAK AND... Sorry, old habit, uhh... hi!", "audio/Briar/Briar_Quote_5.ogg"],
            ["They always run!", "audio/Briar/Briar_Quote_6.ogg"],
            ["Lookin' tasty.", "audio/Briar/Briar_Quote_7.ogg"],
            ["FINALLY!", "audio/Briar/Briar_Quote_8.ogg"],
            ["MINE! Mine...", "audio/Briar/Briar_Quote_9.ogg"]
        ]
    },
    {
        champion:"Caitlyn",
        quotes:[
            ["I'm on the case.", "audio/Caitlyn/Caitlyn_Select.ogg"],
            ["Shall I turn in my badge and rifle as well?", "audio/Caitlyn/Caitlyn_Ban.ogg"],
            ["Every case, every investigation brings me one step closer to justice.", "audio/Caitlyn/Caitlyn_Quote_1.ogg"],
            ["Hot on the trail.", "audio/Caitlyn/Caitlyn_Quote_2.ogg"],
            ["Me, miss? Not by a long shot.", "audio/Caitlyn/Caitlyn_Quote_3.ogg"],
            ["I'm on the job.", "audio/Caitlyn/Caitlyn_Quote_4.ogg"],
            ["Anything you say can and will be used against you.", "audio/Caitlyn/Caitlyn_Quote_5.ogg"],
            ["I'll make this quick.", "audio/Caitlyn/Caitlyn_Quote_6.ogg"],
            ["As expected.", "audio/Caitlyn/Caitlyn_Quote_7.ogg"],
            ["Boom! Headshot.", "audio/Caitlyn/Caitlyn_Quote_8.ogg"],
            ["Guilty as charged.", "audio/Caitlyn/Caitlyn_Quote_9.ogg"]
        ]
    },
    {
        champion:"Camille",
        quotes:[
            ["Precision is the difference between a butcher and a surgeon.", "audio/Camille/Camille_Select.ogg"],
            ["I will wait for you to be better.", "audio/Camille/Camille_Ban.ogg"],
            ["Progress should never be kept waiting.", "audio/Camille/Camille_Quote_1.ogg"],
            ["I ensure the survival of Piltover.", "audio/Camille/Camille_Quote_2.ogg"],
            ["I don't play the game, I make the rules.", "audio/Camille/Camille_Quote_3.ogg"],
            ["Society needs rules.", "audio/Camille/Camille_Quote_4.ogg"],
            ["Know. Your. Place.", "audio/Camille/Camille_Quote_5.ogg"],
            ["Eye on the target.", "audio/Camille/Camille_Quote_6.ogg"],
            ["Calculated.", "audio/Camille/Camille_Quote_7.ogg"]
        ]
    },
    {
        champion:"Cassiopeia",
        quotes:[
            ["There is no antidote for me.", "audio/Cassiopeia/Cassiopeia_Select.ogg"],
            ["Think what I could offer.", "audio/Cassiopeia/Cassiopeia_Ban.ogg"],
            ["Who will have the 'fortune' of facing me today?", "audio/Cassiopeia/Cassiopeia_Quote_1.ogg"],
            ["Careful, now. I bite.", "audio/Cassiopeia/Cassiopeia_Quote_2.ogg"],
            ["Like what you see?", "audio/Cassiopeia/Cassiopeia_Quote_3.ogg"],
            ["Do not tempt a viper.", "audio/Cassiopeia/Cassiopeia_Quote_4.ogg"],
            ["Watch your step.", "audio/Cassiopeia/Cassiopeia_Quote_5.ogg"],
            ["Die with grace.", "audio/Cassiopeia/Cassiopeia_Quote_6.ogg"],
            ["You won't feel a thing.", "audio/Cassiopeia/Cassiopeia_Quote_7.ogg"],
            ["I'll be back soon. Miss me.", "audio/Cassiopeia/Cassiopeia_Quote_8.ogg"]

        ]
    },
    {
        champion:"Cho'Gath",
        quotes:[
            ["You'd wish the world you know to end! Yeeeesssss...", "audio/Chogath/Chogath_Select.ogg"],
            ["Afraid of the dark? Wise!", "audio/Chogath/Chogath_Ban.ogg"],
            ["The daylight! It burns!", "audio/Chogath/Chogath_Quote_1.ogg"],
            ["For the darkness!", "audio/Chogath/Chogath_Quote_2.ogg"],
            ["Nom-nom-nom-nom-nom-nom-nom!", "audio/Chogath/Chogath_Quote_3.ogg"],
            [ "Who will be eaten first?", "audio/Chogath/Chogath_Quote_4.ogg"],
            ["You shall not escape!", "audio/Chogath/Chogath_Quote_5.ogg"],

        ]
    },
    {
        champion:"Corki",
        quotes:[
            ["I'm up to snuff, and gots me an ace machine!", "audio/Corki/Corki_Select.ogg"],
            ["That just goes to show you you're nothin' but a Whiskey Delta!", "audio/Corki/Corki_Ban.ogg"],
            ["Zoooom...!", "audio/Corki/Corki_Quote_1.ogg"],
            ["Speed of heat!", "audio/Corki/Corki_Quote_2.ogg"],
            ["Consider yourself spanked, nugget!", "audio/Corki/Corki_Quote_3.ogg"],
            ["Ready to fly!", "audio/Corki/Corki_Quote_4.ogg"],
            ["Incomin'!", "audio/Corki/Corki_Quote_5.ogg"]
        ]
    }


]

const allSkins = [
    {
        champion: "Aatrox",
        skins:[
            ["Default", "Images/Campeones/Skins/Aatrox/Aatrox.jpg"],
            ["Justicar Aatrox", "Images/Campeones/Skins/Aatrox/Aatrox_01.jpg"],
            ["Mecha Aatrox", "Images/Campeones/Skins/Aatrox/Aatrox_09.jpg"],
            ["Blood Moon Aatrox", "Images/Campeones/Skins/Aatrox/Aatrox_10.jpg"],
            ["Victorious Aatrox", "Images/Campeones/Skins/Aatrox/Aatrox_05.jpg"],
            ["Odyssey Aatrox", "Images/Campeones/Skins/Aatrox/Aatrox_02.jpg"],
            ["Prestige DRX Aatrox", "Images/Campeones/Skins/Aatrox/Aatrox_04.jpg"],
            ["Prestige Blood Moon Aatrox", "Images/Campeones/Skins/Aatrox/Aatrox_08.jpg"],

        ]
    },
    {
        champion: "Ahri",
        skins:[
            ["Default", "Images/Campeones/Skins/Ahri/Ahri.jpg"],
            ["Dynasty Ahri", "Images/Campeones/Skins/Ahri/Ahri_01.jpg"],
            ["Midnight Ahri", "Images/Campeones/Skins/Ahri/Ahri_02.jpg"],
            ["Foxfire Ahri", "Images/Campeones/Skins/Ahri/Ahri_03.jpg"],
            ["Popstar Ahri", "Images/Campeones/Skins/Ahri/Ahri_04.jpg"],
            ["Challenger Ahri", "Images/Campeones/Skins/Ahri/Ahri_05.jpg"],
            ["Arcade Ahri", "Images/Campeones/Skins/Ahri/Ahri_07.jpg"],
            ["Star Guardian Ahri", "Images/Campeones/Skins/Ahri/Ahri_08.jpg"],
            ["Elderwood Ahri", "Images/Campeones/Skins/Ahri/Ahri_09.jpg"],
            ["Coven Ahri", "Images/Campeones/Skins/Ahri/Ahri_10.jpg"],
            ["Snow Moon Ahri", "Images/Campeones/Skins/Ahri/Ahri_11.jpg"],
            ["Arcana Ahri", "Images/Campeones/Skins/Ahri/Ahri_13.jpg"],
            ["K/DA Ahri", "Images/Campeones/Skins/Ahri/Ahri_15.jpg"],
            ["Spirit Blossom Ahri", "Images/Campeones/Skins/Ahri/Ahri_16.jpg"],
            ["Prestige K/DA Ahri", "Images/Campeones/Skins/Ahri/Ahri_12.jpg"],
            [" K/DA ALL OUT Ahri", "Images/Campeones/Skins/Ahri/Ahri_17.jpg"],
        ]
    },
    {
        champion: "Akali",
        skins:[
            ["Default", "Images/Campeones/Skins/Akali/Akali.jpg"],
            ["Stinger Akali", "Images/Campeones/Skins/Akali/Akali_01.jpg"],
            ["Infernal Akali", "Images/Campeones/Skins/Akali/Akali_02.jpg"],
            ["All-Star Akali", "Images/Campeones/Skins/Akali/Akali_03.jpg"],
            ["Nurse Akali", "Images/Campeones/Skins/Akali/Akali_04.jpg"],
            ["Blood Moon Akali", "Images/Campeones/Skins/Akali/Akali_05.jpg"],
            ["Silverfang Akali", "Images/Campeones/Skins/Akali/Akali_06.jpg"],
            ["Headhunter Akali", "Images/Campeones/Skins/Akali/Akali_07.jpg"],
            ["Sashimi Akali", "Images/Campeones/Skins/Akali/Akali_08.jpg"],
            ["K/DA Akali", "Images/Campeones/Skins/Akali/Akali_09.jpg"],
            ["True Damage Akali", "Images/Campeones/Skins/Akali/Akali_12.jpg"],
            ["Prestige K/DA Akali", "Images/Campeones/Skins/Akali/Akali_10.jpg"],
            ["PROJECT: Akali", "Images/Campeones/Skins/Akali/Akali_11.jpg"],
            ["K/DA ALL OUT Akali", "Images/Campeones/Skins/Akali/Akali_13.jpg"],
            ["Crime City Nightmare Akali", "Images/Campeones/Skins/Akali/Akali_14.jpg"],
            ["Star Guardian Akali", "Images/Campeones/Skins/Akali/Akali_16.jpg"],
            ["Coven Akali", "Images/Campeones/Skins/Akali/Akali_18.jpg"],
            ["Prestige Coven Akali", "Images/Campeones/Skins/Akali/Akali_17.jpg"],
        ]
    },
    {
        champion: "Akshan",
        skins:[
            ["Default", "Images/Campeones/Skins/Akshan/Akshan.jpg"],
            ["Cyber Pop Akshan", "Images/Campeones/Skins/Akshan/Akshan_1.jpg"],
            ["Crystal Rose Akshan", "Images/Campeones/Skins/Akshan/Akshan_2.jpg"],
        ]
    },
    {
        champion: "Alistar",
        skins:[
            ["Default", "Images/Campeones/Skins/Alistar/Alistar.jpg"],
            ["Black Alistar", "Images/Campeones/Skins/Alistar/Alistar_01.jpg"],
            ["Golden Alistar", "Images/Campeones/Skins/Alistar/Alistar_02.jpg"],
            ["Matador Alistar", "Images/Campeones/Skins/Alistar/Alistar_03.jpg"],
            ["Longhorn Alistar", "Images/Campeones/Skins/Alistar/Alistar_04.jpg"],
            ["Unchained Alistar", "Images/Campeones/Skins/Alistar/Alistar_05.jpg"],
            ["Infernal Alistar", "Images/Campeones/Skins/Alistar/Alistar_06.jpg"],
            ["Marauder Alistar", "Images/Campeones/Skins/Alistar/Alistar_08.jpg"],
            ["Hextech Alistar", "Images/Campeones/Skins/Alistar/Alistar_11.jpg"],
            ["Conqueror Alistar", "Images/Campeones/Skins/Alistar/Alistar_12.jpg"],
            ["Blackfrost Alistar", "Images/Campeones/Skins/Alistar/Alistar_13.jpg"],
            ["Lunar Beast Alistar", "Images/Campeones/Skins/Alistar/Alistar_14.jpg"],            
        ]
    },
    {
        champion: "Amumu",
        skins:[
            ["Default", "Images/Campeones/Skins/Amumu/Amumu.jpg"],
            ["Pharaoh Amumu", "Images/Campeones/Skins/Amumu/Amumu_01.jpg"],
            ["Vancouver Amumu", "Images/Campeones/Skins/Amumu/Amumu_02.jpg"],
            ["Emumu", "Images/Campeones/Skins/Amumu/Amumu_03.jpg"],
            ["Re-Gifted Amumu", "Images/Campeones/Skins/Amumu/Amumu_04.jpg"],
            ["Almost-Prom King Amumu", "Images/Campeones/Skins/Amumu/Amumu_5.jpg"],
            ["Little Knight Amumu", "Images/Campeones/Skins/Amumu/Amumu_6.jpg"],
            ["Sad Robot Amumu", "Images/Campeones/Skins/Amumu/Amumu_7.jpg"],
            ["Infernal Amumu", "Images/Campeones/Skins/Amumu/Amumu_9.jpg"]
            ["Hextech Amumu", "Images/Campeones/Skins/Amumu/Amumu_10.jpg"],
            ["Pumpkin Prince Amumu", "Images/Campeones/Skins/Amumu/Amumu_11.jpg"],
            ["Porcelein Amumu", "Images/Campeones/Skins/Amumu/Amumu_12.jpg"],
            ["Heartache Amumu", "Images/Campeones/Skins/Amumu/Amumu_13.jpg"],
        ]
    },
    {
        champion: "Anivia",
        skins:[
            ["Default", "Images/Campeones/Skins/Anivia/Anivia.jpg"],
            ["Team Spirit Anivia", "Images/Campeones/Skins/Anivia/Anivia_01.jpg"],
            ["Bird of Prey Anivia", "Images/Campeones/Skins/Anivia/Anivia_2.jpg"],
            ["Noxus Hunter Anivia", "Images/Campeones/Skins/Anivia/Anivia_03.jpg"],
            ["Hextech Anivia", "Images/Campeones/Skins/Anivia/Anivia_04.jpg"],
            ["Blackfrost Anivia", "Images/Campeones/Skins/Anivia/Anivia_05.jpg"],
            ["Festival Queen Anivia", "Images/Campeones/Skins/Anivia/Anivia_07.jpg"],
            ["Papercraft Anivia", "Images/Campeones/Skins/Anivia/Anivia_08.jpg"],
            ["Cosmic Flight Anivia", "Images/Campeones/Skins/Anivia/Anivia_09.jpg"],
            ["Divine Phoenix Anivia", "Images/Campeones/Skins/Anivia/Anivia_10.jpg"],
            ["Victorious Anivia", "Images/Campeones/Skins/Anivia/Anivia_11.jpg"],
        ]
    }
]

const allAbilities = [
    {
        champion: "Aatrox",
        abilities:[
        "images/Habilidades/Aatrox/q.png",
        "images/Habilidades/Aatrox/w.png",
        "images/Habilidades/Aatrox/e.png",
        "images/Habilidades/Aatrox/r.png",
        "images/Habilidades/Aatrox/p.png"
        ]
        
    },
    {
        champion: "Ahri",
        abilities:[
        "images/Habilidades/Ahri/q.png",
        "images/Habilidades/Ahri/w.png",
        "images/Habilidades/Ahri/e.png",
        "images/Habilidades/Ahri/r.png",
        "images/Habilidades/Ahri/p.png"
        ]
    },
    {
        champion: "Akali",
        abilities:[
        "images/Habilidades/Akali/q.png",
        "images/Habilidades/Akali/w.png",
        "images/Habilidades/Akali/e.png",
        "images/Habilidades/Akali/r.png",
        "images/Habilidades/Akali/p.png"
        ]
    },
    {
        champion: "Akshan",
        abilities:[
        "images/Habilidades/Akshan/q.png",
        "images/Habilidades/Akshan/w.png",
        "images/Habilidades/Akshan/e.png",
        "images/Habilidades/Akshan/r.png",
        "images/Habilidades/Akshan/p.png"
        ]
    },
    {
        champion: "Alistar",
        abilities:[
        "images/Habilidades/Alistar/q.png",
        "images/Habilidades/Alistar/w.png",
        "images/Habilidades/Alistar/e.png",
        "images/Habilidades/Alistar/r.png",
        "images/Habilidades/Alistar/p.png"
        ]
    },
    {
        champion: "Amumu",
        abilities:[
        "images/Habilidades/Amumu/q.png",
        "images/Habilidades/Amumu/w.png",
        "images/Habilidades/Amumu/e.png",
        "images/Habilidades/Amumu/r.png",
        "images/Habilidades/Amumu/p.png"
        ]
    },
    {
        champion: "Anivia",
        abilities:[
        "images/Habilidades/Anivia/q.png",
        "images/Habilidades/Anivia/w.png",
        "images/Habilidades/Anivia/e.png",
        "images/Habilidades/Anivia/r.png",
        "images/Habilidades/Anivia/p.png"
        ]
    },
    {
        champion: "Annie",
        abilities:[
        "images/Habilidades/Annie/q.png",
        "images/Habilidades/Annie/w.png",
        "images/Habilidades/Annie/e.png",
        "images/Habilidades/Annie/r.png",
        "images/Habilidades/Annie/p.png"
        ]
    },
    {
        champion: "Aphelios",
        abilities:[
        "images/Habilidades/Aphelios/q.png",
        "images/Habilidades/Aphelios/w.png",
        "images/Habilidades/Aphelios/e.png",
        "images/Habilidades/Aphelios/r.png",
        "images/Habilidades/Aphelios/p.png"
        ]
    },
    {
        champion: "Ashe",
        abilities:[
        "images/Habilidades/Ashe/q.png",
        "images/Habilidades/Ashe/w.png",
        "images/Habilidades/Ashe/e.png",
        "images/Habilidades/Ashe/r.png",
        "images/Habilidades/Ashe/p.png"
        ]
    },
    {
        champion: "Aurelion Sol",
        abilities:[
        "images/Habilidades/AurelionSol/q.png",
        "images/Habilidades/AurelionSol/w.png",
        "images/Habilidades/AurelionSol/e.png",
        "images/Habilidades/AurelionSol/r.png",
        "images/Habilidades/AurelionSol/p.png"
        ]
    },
    {
        champion: "Azir",
        abilities:[
        "images/Habilidades/Azir/q.png",
        "images/Habilidades/Azir/w.png",
        "images/Habilidades/Azir/e.png",
        "images/Habilidades/Azir/r.png",
        "images/Habilidades/Azir/p.png"
        ]
    },
    {
        champion: "Bard",
        abilities:[
        "images/Habilidades/Bard/q.png",
        "images/Habilidades/Bard/w.png",
        "images/Habilidades/Bard/e.png",
        "images/Habilidades/Bard/r.png",
        "images/Habilidades/Bard/p.png"
        ]
    },
    {
        champion: "Bel'Veth",
        abilities:[
        "images/Habilidades/BelVeth/q.png",
        "images/Habilidades/BelVeth/w.png",
        "images/Habilidades/BelVeth/e.png",
        "images/Habilidades/BelVeth/r.png",
        "images/Habilidades/BelVeth/p.png"
        ]
    },
    {
        champion: "Blitzcrank",
        abilities:[
        "images/Habilidades/Blitzcrank/q.png",
        "images/Habilidades/Blitzcrank/w.png",
        "images/Habilidades/Blitzcrank/e.png",
        "images/Habilidades/Blitzcrank/r.png",
        "images/Habilidades/Blitzcrank/p.png"
        ]
    },
    {
        champion: "Brand",
        abilities:[
        "images/Habilidades/Brand/q.png",
        "images/Habilidades/Brand/w.png",
        "images/Habilidades/Brand/e.png",
        "images/Habilidades/Brand/r.png",
        "images/Habilidades/Brand/p.png"
        ]
    },
    {
        champion: "Braum",
        abilities:[
        "images/Habilidades/Braum/q.png",
        "images/Habilidades/Braum/w.png",
        "images/Habilidades/Braum/e.png",
        "images/Habilidades/Braum/r.png",
        "images/Habilidades/Braum/p.png"
        ]
    },
    {
        champion: "Briar",
        abilities:[
        "images/Habilidades/Briar/q.png",
        "images/Habilidades/Briar/w.png",
        "images/Habilidades/Briar/e.png",
        "images/Habilidades/Briar/r.png",
        "images/Habilidades/Briar/p.png"
        ]
    },
    {
        champion: "Caitlyn",
        abilities:[
        "images/Habilidades/Caitlyn/q.png",
        "images/Habilidades/Caitlyn/w.png",
        "images/Habilidades/Caitlyn/e.png",
        "images/Habilidades/Caitlyn/r.png",
        "images/Habilidades/Caitlyn/p.png"
        ]
    },
    {
        champion: "Camille",
        abilities:[
        "images/Habilidades/Camille/q.png",
        "images/Habilidades/Camille/w.png",
        "images/Habilidades/Camille/e.png",
        "images/Habilidades/Camille/r.png",
        "images/Habilidades/Camille/p.png"
        ]
    },
    {
        champion: "Cassiopeia",
        abilities:[
        "images/Habilidades/Cassiopeia/q.png",
        "images/Habilidades/Cassiopeia/w.png",
        "images/Habilidades/Cassiopeia/e.png",
        "images/Habilidades/Cassiopeia/r.png",
        "images/Habilidades/Cassiopeia/p.png"
        ]
    },
    {
        champion: "Cho'Gath",
        abilities:[
        "Images/Habilidades/ChoGath/q.png",
        "images/Habilidades/ChoGath/w.png",
        "images/Habilidades/ChoGath/e.png",
        "images/Habilidades/ChoGath/r.png",
        "images/Habilidades/ChoGath/p.png"
        ]
    },
    {
        champion: "Corki",
        abilities:[
        "images/Habilidades/Corki/q.png",
        "images/Habilidades/Corki/w.png",
        "images/Habilidades/Corki/e.png",
        "images/Habilidades/Corki/r.png",
        "images/Habilidades/Corki/p.png"
        ]
    },
    {
        champion: "Darius",
        abilities:[
        "images/Habilidades/Darius/q.png",
        "images/Habilidades/Darius/w.png",
        "images/Habilidades/Darius/e.png",
        "images/Habilidades/Darius/r.png",
        "images/Habilidades/Darius/p.png"
        ]
    },
    {
        champion: "Diana",
        abilities:[
        "images/Habilidades/Diana/q.png",
        "images/Habilidades/Diana/w.png",
        "images/Habilidades/Diana/e.png",
        "images/Habilidades/Diana/r.png",
        "images/Habilidades/Diana/p.png"
        ]
    },
    {
        champion: "Dr Mundo",
        abilities:[
        "images/Habilidades/DrMundo/q.png",
        "images/Habilidades/DrMundo/w.png",
        "images/Habilidades/DrMundo/e.png",
        "images/Habilidades/DrMundo/r.png",
        "images/Habilidades/DrMundo/p.png"
        ]
    },
    {
        champion: "Draven",
        abilities:[
        "images/Habilidades/Draven/q.png",
        "images/Habilidades/Draven/w.png",
        "images/Habilidades/Draven/e.png",
        "images/Habilidades/Draven/r.png",
        "images/Habilidades/Draven/p.png"
        ]
    },
    {
        champion: "Ekko",
        abilities:[
        "images/Habilidades/Ekko/q.png",
        "images/Habilidades/Ekko/w.png",
        "images/Habilidades/Ekko/e.png",
        "images/Habilidades/Ekko/r.png",
        "images/Habilidades/Ekko/p.png"
        ]
    },
    {
        champion: "Elise",
        abilities:[
        "images/Habilidades/Elise/q.png",
        "images/Habilidades/Elise/w.png",
        "images/Habilidades/Elise/e.png",
        "images/Habilidades/Elise/r.png",
        "images/Habilidades/Elise/p.png"
        ]
    },
    {
        champion: "Evelynn",
        abilities:[
        "images/Habilidades/Evelynn/q.png",
        "images/Habilidades/Evelynn/w.png",
        "images/Habilidades/Evelynn/e.png",
        "images/Habilidades/Evelynn/r.png",
        "images/Habilidades/Evelynn/p.png"
        ]
    },
    {
        champion: "Ezreal",
        abilities:[
        "images/Habilidades/Ezreal/q.png",
        "images/Habilidades/Ezreal/w.png",
        "images/Habilidades/Ezreal/e.png",
        "images/Habilidades/Ezreal/r.png",
        "images/Habilidades/Ezreal/p.png"
        ]
    },
    {
        champion: "Fiddlesticks",
        abilities:[
        "images/Habilidades/Fiddlesticks/q.png",
        "images/Habilidades/Fiddlesticks/w.png",
        "images/Habilidades/Fiddlesticks/e.png",
        "images/Habilidades/Fiddlesticks/r.png",
        "images/Habilidades/Fiddlesticks/p.png"
        ]
    },
    {
        champion: "Fiora",
        abilities:[
        "images/Habilidades/Fiora/q.png",
        "images/Habilidades/Fiora/w.png",
        "images/Habilidades/Fiora/e.png",
        "images/Habilidades/Fiora/r.png",
        "images/Habilidades/Fiora/p.png"
        ]
    },
    {
        champion: "Fizz",
        abilities:[
        "images/Habilidades/Fizz/q.png",
        "images/Habilidades/Fizz/w.png",
        "images/Habilidades/Fizz/e.png",
        "images/Habilidades/Fizz/r.png",
        "images/Habilidades/Fizz/p.png"
        ]
    },
    {
        champion: "Galio",
        abilities:[
        "images/Habilidades/Galio/q.png",
        "images/Habilidades/Galio/w.png",
        "images/Habilidades/Galio/e.png",
        "images/Habilidades/Galio/r.png",
        "images/Habilidades/Galio/p.png"
        ]
    },
    {
        champion: "Gangplank",
        abilities:[
        "images/Habilidades/Gangplank/q.png",
        "images/Habilidades/Gangplank/w.png",
        "images/Habilidades/Gangplank/e.png",
        "images/Habilidades/Gangplank/r.png",
        "images/Habilidades/Gangplank/p.png"
        ]
    },
    {
        champion: "Garen",
        abilities:[
        "images/Habilidades/Garen/q.png",
        "images/Habilidades/Garen/w.png",
        "images/Habilidades/Garen/e.png",
        "images/Habilidades/Garen/r.png",
        "images/Habilidades/Garen/p.png"
        ]
    },
    {
        champion: "Gnar",
        abilities:[
        "images/Habilidades/Gnar/q.png",
        "images/Habilidades/Gnar/w.png",
        "images/Habilidades/Gnar/e.png",
        "images/Habilidades/Gnar/r.png",
        "images/Habilidades/Gnar/p.png"
        ]
    },
    {
        champion: "Gragas",
        abilities:[
        "images/Habilidades/Gragas/q.png",
        "images/Habilidades/Gragas/w.png",
        "images/Habilidades/Gragas/e.png",
        "images/Habilidades/Gragas/r.png",
        "images/Habilidades/Gragas/p.png"
        ]
    },
    {
        champion: "Graves",
        abilities:[
        "images/Habilidades/Graves/q.png",
        "images/Habilidades/Graves/w.png",
        "images/Habilidades/Graves/e.png",
        "images/Habilidades/Graves/r.png",
        "images/Habilidades/Graves/p.png"
        ]
    },
    {
        champion: "Gwen",
        abilities:[
        "images/Habilidades/Gwen/q.png",
        "images/Habilidades/Gwen/w.png",
        "images/Habilidades/Gwen/e.png",
        "images/Habilidades/Gwen/r.png",
        "images/Habilidades/Gwen/p.png"
        ]
    },
    {
        champion: "Hecarim",
        abilities:[
        "images/Habilidades/Hecarim/q.png",
        "images/Habilidades/Hecarim/w.png",
        "images/Habilidades/Hecarim/e.png",
        "images/Habilidades/Hecarim/r.png",
        "images/Habilidades/Hecarim/p.png"
        ]
    },
    {
        champion: "Heimerdinger",
        abilities:[
        "images/Habilidades/Heimerdinger/q.png",
        "images/Habilidades/Heimerdinger/w.png",
        "images/Habilidades/Heimerdinger/e.png",
        "images/Habilidades/Heimerdinger/r.png",
        "images/Habilidades/Heimerdinger/p.png"
        ]
    },
    {
        champion: "Illaoi",
        abilities:[
        "images/Habilidades/Illaoi/q.png",
        "images/Habilidades/Illaoi/w.png",
        "images/Habilidades/Illaoi/e.png",
        "images/Habilidades/Illaoi/r.png",
        "images/Habilidades/Illaoi/p.png"
        ]
    },
    {
        champion: "Irelia",
        abilities:[
        "images/Habilidades/Irelia/q.png",
        "images/Habilidades/Irelia/w.png",
        "images/Habilidades/Irelia/e.png",
        "images/Habilidades/Irelia/r.png",
        "images/Habilidades/Irelia/p.png"
        ]
    },
    {
        champion: "Ivern",
        abilities:[
        "images/Habilidades/Ivern/q.png",
        "images/Habilidades/Ivern/w.png",
        "images/Habilidades/Ivern/e.png",
        "images/Habilidades/Ivern/r.png",
        "images/Habilidades/Ivern/p.png"
        ]
    },
    {
        champion: "Janna",
        abilities:[
        "images/Habilidades/Janna/q.png",
        "images/Habilidades/Janna/w.png",
        "images/Habilidades/Janna/e.png",
        "images/Habilidades/Janna/r.png",
        "images/Habilidades/Janna/p.png"
        ]
    },
    {
        champion: "Jarvan IV",
        abilities:[
        "images/Habilidades/JarvanIV/q.png",
        "images/Habilidades/JarvanIV/w.png",
        "images/Habilidades/JarvanIV/e.png",
        "images/Habilidades/JarvanIV/r.png",
        "images/Habilidades/JarvanIV/p.png"
        ]
    },
    {
        champion: "Jax",
        abilities:[
        "images/Habilidades/Jax/q.png",
        "images/Habilidades/Jax/w.png",
        "images/Habilidades/Jax/e.png",
        "images/Habilidades/Jax/r.png",
        "images/Habilidades/Jax/p.png"
        ]
    },
    {
        champion: "Jayce",
        abilities:[
        "images/Habilidades/Jayce/q.png",
        "images/Habilidades/Jayce/w.png",
        "images/Habilidades/Jayce/e.png",
        "images/Habilidades/Jayce/r.png",
        "images/Habilidades/Jayce/p.png"
        ]
    },
    {
        champion: "Jhin",
        abilities:[
        "images/Habilidades/Jhin/q.png",
        "images/Habilidades/Jhin/w.png",
        "images/Habilidades/Jhin/e.png",
        "images/Habilidades/Jhin/r.png",
        "images/Habilidades/Jhin/p.png"
        ]
    },
    {
        champion: "Jinx",
        abilities:[
        "images/Habilidades/Jinx/q.png",
        "images/Habilidades/Jinx/w.png",
        "images/Habilidades/Jinx/e.png",
        "images/Habilidades/Jinx/r.png",
        "images/Habilidades/Jinx/p.png"
        ]
    },
    {
        champion: "Kai'Sa",
        abilities:[
        "images/Habilidades/KaiSa/q.png",
        "images/Habilidades/KaiSa/w.png",
        "images/Habilidades/KaiSa/e.png",
        "images/Habilidades/KaiSa/r.png",
        "images/Habilidades/KaiSa/p.png"
        ]   
    },
    {
        champion: "Kalista",
        abilities:[
        "images/Habilidades/Kalista/q.png",
        "images/Habilidades/Kalista/w.png",
        "images/Habilidades/Kalista/e.png",
        "images/Habilidades/Kalista/r.png",
        "images/Habilidades/Kalista/p.png"
        ]
    },
    {
        champion: "Karma",
        abilities:[
        "images/Habilidades/Karma/q.png",
        "images/Habilidades/Karma/w.png",
        "images/Habilidades/Karma/e.png",
        "images/Habilidades/Karma/r.png",
        "images/Habilidades/Karma/p.png"
        ]
    },
    {
        champion: "Karthus",
        abilities:[
        "images/Habilidades/Karthus/q.png",
        "images/Habilidades/Karthus/w.png",
        "images/Habilidades/Karthus/e.png",
        "images/Habilidades/Karthus/r.png",
        "images/Habilidades/Karthus/p.png"
        ]
    },
    {
        champion: "Kassadin",
        abilities:[
        "images/Habilidades/Kassadin/q.png",
        "images/Habilidades/Kassadin/w.png",
        "images/Habilidades/Kassadin/e.png",
        "images/Habilidades/Kassadin/r.png",
        "images/Habilidades/Kassadin/p.png"
        ]
    },
    {
        champion: "Katarina",
        abilities:[
        "images/Habilidades/Katarina/q.png",
        "images/Habilidades/Katarina/w.png",
        "images/Habilidades/Katarina/e.png",
        "images/Habilidades/Katarina/r.png",
        "images/Habilidades/Katarina/p.png"
        ]
    },
    {
        champion: "Kayle",
        abilities:[
        "images/Habilidades/Kayle/q.png",
        "images/Habilidades/Kayle/w.png",
        "images/Habilidades/Kayle/e.png",
        "images/Habilidades/Kayle/r.png",
        "images/Habilidades/Kayle/p.png"
        ]
    },
    {
        champion: "Kayn",
        abilities:[
        "images/Habilidades/Kayn/q.png",
        "images/Habilidades/Kayn/w.png",
        "images/Habilidades/Kayn/e.png",
        "images/Habilidades/Kayn/r.png",
        "images/Habilidades/Kayn/p.png"
        ]
    },
]

const ABILITIES = ["q", "w", "e", "r", "passive"];
