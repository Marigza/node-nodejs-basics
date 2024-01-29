import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const targetFile = path.join(__dirname, '/files/fileToRead.txt');

    fs.readFile(targetFile, 'utf8', (err, data) => {
        if (err) throw new Error('FS operation failed');
        console.log(data)
    })
};

await read();