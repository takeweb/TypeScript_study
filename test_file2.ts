// カウントを合計する関数
function sum(data: Data[]) {
    let t = 0;
    data.forEach((item) => {
        t += item.count;
    });
    return t;
}

// Data
interface Data {
    name: string,
    count: number
}

{
    // 文字コードを指定
    const decoder = new TextDecoder('utf-8');

    // ファイルの読み込み
    const data = await Deno.readFile('data.json');
    const json = JSON.parse(decoder.decode(data))

    console.log(sum(json));
}
