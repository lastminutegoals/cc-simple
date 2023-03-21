import { readFile } from 'node:fs/promises';
import { createInterface } from 'node:readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', async (input) => {
    if (['y', 'yes'].includes(input.toLowerCase())) {
        process.exit(0);
    }

    console.log('Aboring commit.')
    process.exit(1);

});

rl.on('close', () => { process.exit(1); });
rl.on('SIGINT', () => { process.exit(1); });

const local = JSON.parse(await readFile('./package.json')).version;
const remote = (await (await fetch('https://registry.npmjs.org/cc-simple')).json())['dist-tags'].latest;

if (local === remote) {
    console.error(`Local version ${local} matches remote version ${remote} on npm.`);
    console.error(`Do you want to commit anyway [y/n]?`);
    rl.prompt(true);
}

else {
    process.exit(0);
}