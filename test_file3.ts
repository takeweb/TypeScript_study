{
    const decoder = new TextDecoder('utf-8');
    const data = await Deno.readFile('data.json');
    console.log(decoder.decode(data));
}