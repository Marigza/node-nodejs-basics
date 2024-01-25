import { mkdir, readdir, copyFile } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const directoryCreated = path.join(__dirname, '/files_copy');
    const directoryForCopy = path.join(__dirname, '/files');

    readdir(directoryForCopy, (err, dir) => {
        if (err) throw new Error('FS operation failed');

        mkdir(directoryCreated, (err) => {
            if (err?.code === 'EEXIST') throw new Error('FS operation failed');
        });

        for (let file of dir) {
            let fileScr = path.join(__dirname, `/files/${file}`);
            let fileDest = path.join(directoryCreated, `/${file}`);
            copyFile(fileScr, fileDest, err => {
                if (err) throw new Error('FS operation failed');
            })
        }
    })
    
};

await copy();
