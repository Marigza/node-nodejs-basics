import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {

    const fileToWrite = path.join(__dirname, 'files/fileToWrite.txt')

    const stream = createWriteStream(fileToWrite);

    process.stdout.write('Please enter text and press ENTER\n');

    process.stdin.on("data", (data) => {
        stream.write(data)
        process.stdout.write('\nData is recorded to "fileToWrite.txt"\n');
        process.exit()
    })
        

};

await write();