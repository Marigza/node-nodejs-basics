import { createReadStream } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'url';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const data = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

    createReadStream(data)
        .pipe(crypto.createHash('SHA256'))
        .setEncoding('hex')
        .pipe(stdout)
};

await calculateHash();