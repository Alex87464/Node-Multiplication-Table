import * as fs from 'node:fs';

export const createFile = async (multiplier: number) => {
  try {
    let output = '';

    for (let i = 1; i < 10; i++) {
      output += `${i} x ${multiplier} = ${i * multiplier}\n`;
    }

    fs.writeFileSync(`./output/tabla-${multiplier}.txt`, output);

    return `File ${multiplier}.txt created successfully`;
  } catch (error) {
    throw error;
  }
};
