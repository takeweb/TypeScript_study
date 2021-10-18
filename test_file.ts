import * as stream from "https://deno.land/std@0.111.0/streams/conversion.ts";

{
    // 読み込むファイルを指定
    const file = await Deno.open('./hoge.txt', {read: true});
    
    // 文字コードを指定
    const decoder = new TextDecoder('utf-8');
    
    // ファイルの読み込み
    const text = decoder.decode(await stream.readAll(file));
    Deno.close(file.rid);

    // 表示
    console.log(text);
}