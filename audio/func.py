import os



allChampions = ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', "Bel'Veth", 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopea', "Cho'Gath", 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Miss Fortune', 'Twisted Fate', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen', 'Renata Glasc', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Jarvan IV', 'Janna', 'Jax', 'Jayce', 'Jhin', 'Jinx', "K'Sante", "Kai'Sa", 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', "Kha'Zix", 'Kindred', 'Kled', "Kog'Maw", 'Tahm Kench', 'LeBlanc', 'Lee Sin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nilah', 'Nocturne', 'Nunu & Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan','Rammus', "Rek'Sai", 'Rell', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', "Vel'Koz", 'Vex', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra']








print(allChampions[1])
for i in range(0, len(allChampions)):
    os.mkdir(str(allChampions[i]))
