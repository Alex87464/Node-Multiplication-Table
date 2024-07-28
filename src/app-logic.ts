import fs from 'fs';
import { yarg } from './config/plugins';

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = '';
const headerMessage = `
============================
    Table of: ${base}
============================
`;
for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}
outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
}

const outputPath = `output/`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}table-${base}.txt`, outputMessage);
console.log(`table-${base}.txt created in ${outputPath}`);
