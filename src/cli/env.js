const parseEnv = () => {
    const prefix = 'RSS_';
    const processArray = Object.entries(process.env);
    const filteredArray = processArray.filter(variable => variable[0].startsWith(prefix));
    const result = filteredArray.map(env => `${env[0]}=${env[1]}`).join('; ');

    if (result.length) {
        console.log(result);
    } else {
        console.log('no such variables, you need to pass it when running script');
    }
};

parseEnv();