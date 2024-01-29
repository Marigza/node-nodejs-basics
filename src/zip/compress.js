import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const fileToCompress = path.join(__dirname, '/files/fileToCompress.txt');
    const archive = path.join(__dirname, '/files/archive.gz');

    const sourceStream = createReadStream(fileToCompress, 'utf-8');
    const destStream = createWriteStream(archive);
    const gzip = createGzip();

    pipeline(
        sourceStream,
        gzip,
        destStream,
        err => {
            if(err) throw new Error(err)
        }
    )
};

await compress();