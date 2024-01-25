const parseArgs = () => {
    const startIndex = process.argv.findIndex(arg=>arg.startsWith('--'))
    const argsArray = process.argv.slice(startIndex);
    const resultArray = [];
    for (let i = 0; i < argsArray.length; i = i + 2) {
        resultArray.push(`${argsArray[i]} is ${argsArray[i+1]}`)
    }

    console.log(resultArray.map(arg=>arg.slice(2)).join(', '))
};

parseArgs();