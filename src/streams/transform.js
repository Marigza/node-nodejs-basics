import { Transform } from 'node:stream';

const transform = async () => {
    const processRead = process.stdin;
    const processWrite = process.stdout;
    
    const transform = new Transform({
        transform(chunk, enc, callback) {
            const reverseChunk = chunk.toString().trim().split('').reverse().join('');
            this.push(`reverse text: ${reverseChunk}\n`);
            process.exit(),
            callback()
        }
    })

    processRead.pipe(transform).pipe(processWrite)
};

await transform();