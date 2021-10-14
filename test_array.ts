// Array・・・配列
const data1: string[] = ["aa", "bb", "cc"];

for (const item of data1) {
    console.log(item)
}

const data2: number[] = [100, 98, 76, 59, 87, 96]
let total = 0

for (const item of data2) {
    total += item
}

const average = total / data2.length
console.log('合計' + total)
console.log('平均' + average)

// 配列の最後に追加
const x = data2.push(99)
console.log(x)
for (const item of data2) {
    console.log(item)
}

// // 配列の最後を削除
const y  = data2.pop()
console.log(y)
for (const item of data2) {
    console.log(item)
}

// 配列の最初に追加
const z = data2.unshift(88)
console.log(z)
for (const item of data2) {
    console.log(item)
}

// 配列の最初を削除
const zz = data2.shift()
console.log(zz)
for (const item of data2) {
    console.log(item)
}
