import { writeFile, access } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const text = 'I am fresh and young';
    const directory = path.join(__dirname, '/files/fresh.txt');
    
    access(directory, (err) => {
       
        if (err) {
            writeFile(directory, text, (err) => {
                if (err) throw err;
            })
        } else {
            throw new Error('FS operation failed')
        }
    });

};

await create();