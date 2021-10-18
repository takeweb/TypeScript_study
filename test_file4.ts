{
    const json = '{"result":true, "count":42}';
    const obj = JSON.parse(json);

    // expected output: 42
    console.log(obj.count);

    // expected output: true
    console.log(obj.result);
}