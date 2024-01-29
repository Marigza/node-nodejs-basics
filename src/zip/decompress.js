import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const fileAfterDecompress = path.join(__dirname, '/files/fileToCompress.txt');
    const archive = path.join(__dirname, '/files/archive.gz');

    const sourceStream = createReadStream(archive);
    const destStream = createWriteStream(fileAfterDecompress);
    const gunzip = createGunzip();

    pipeline(
        sourceStream,
        gunzip,
        destStream,
        err => {
            if (err) throw new Error(err)
        }
    )
};

await decompress();