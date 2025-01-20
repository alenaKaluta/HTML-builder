const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath, 'utf8');
let dataFile = '';
readStream.on("data", (chunk) => (dataFile += chunk));
readStream.on("end", () => console.log(dataFile));
readStream.on("error", (error) => console.log("Error", error.message));