// TODO： it's unfinished
let array = [23, 78, 45, 8, 32, 56];

let properIndex = 0;

let properIndexNumber = 0;

for (let i = 0; i < array.length; i++) {


    // 在已排序部分的合适位置
    // 内层寻找插入位置
    for (let j = 0; j <= i; j++) {
        if (array[j] >= array[i]) {
            properIndex = j
        }
    }

    properIndexNumber = array[properIndex]

    array.slice(1,2)

    array.unshift(properIndexNumber)

}

