import * as fs from 'fs';

interface Data {
    name: string,
    count: number,
}

function total(data: Data[]): number {
    let t = 0;
    data.forEach((item) => {
        t += item.count;
    })
    return t;
}

const content = fs.readFileSync('data.json');
const data: Data[] = JSON.parse(content);
console.log(total(data));
