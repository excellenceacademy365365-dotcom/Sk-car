const fs = require('fs');
let content = fs.readFileSync('src/data/dealershipData.ts', 'utf-8');

content = content.replace(/imgAvailable2,\n  imgAvailable3/, 'imgAvailable2,\n  imgAvailable3');

// Wait, availableCarImages had `imgAvailable0` at the end previously?
// Let's check the current content of availableCarImages
