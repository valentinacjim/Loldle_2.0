const fs = require('fs');
const path = require('path');

const championNames = ['champion1', 'champion2', 'champion3']; // Replace with your list of champion names

const habilidadesDir = path.join(__dirname, 'Habilidades');

championNames.forEach(championName => {
    const championDir = path.join(habilidadesDir, championName);
    fs.mkdirSync(championDir);
});


