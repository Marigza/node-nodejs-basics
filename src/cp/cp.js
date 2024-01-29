import { fork } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const pathToChild = path.join(__dirname, '/files/script.js');

    return fork(pathToChild, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
