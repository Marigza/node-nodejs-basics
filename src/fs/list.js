import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderName = path.join(__dirname, '/files');

    fs.readdir(folderName, (err, folderContent) => {
        if (err) throw new Error('FS operation failed');
        
        console.log(folderContent);
    })
};

await list();