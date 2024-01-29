import os from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const amountOfCores = os.cpus().length;

const performCalculations = async () => {
    const pathToWorker = path.join(__dirname, '/worker.js');
    const promiseArray = [];

    for (let i = 0; i < amountOfCores; i++) {
        promiseArray[i] = new Promise((resolve, reject) => {
            const start = 10;
            const current = start + i;
            const worker = new Worker(pathToWorker, {
                workerData: current,
            });

            worker.on('message', resolve);
            worker.on('error', reject)
        })
    }

    Promise.allSettled(promiseArray).then(resultArray => {
       
        resultArray.forEach((result) => {
            if (result.status === 'fulfilled') {
                result.status = 'resolved';
                result.data = result.value;
                delete result.value;
            } else if (result.status === 'rejected') {
                result.status = 'error';
                result.data = null;
                delete result.reason;
            }
        })
        
        console.log(resultArray)
    })
};

await performCalculations();