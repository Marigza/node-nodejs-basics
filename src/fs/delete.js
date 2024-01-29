import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const fileToRemove = path.join(__dirname, 'files/fileToRemove.txt');

    fs.rm(fileToRemove, err => {
        if (err) throw new Error('FS operation failed')
    })
};

await remove();