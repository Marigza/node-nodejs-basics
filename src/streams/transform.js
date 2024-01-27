const transform = async () => {
    process.stdout.write('Please enter text and press ENTER\n');

    process.stdin.on('data', (data)=> {
        const reversedData = data.toString().split('').reverse().join('');
        process.stdout.write(`reversed text: ${reversedData}`);
        process.exit()
    })
};

await transform();