let array = [23, 78, 45, 8, 32, 56];

for (let i = 0; i < array.length; i++) {

    for (let j = array.length - 1; j >= 0; j--) {
        if (array[j-1] > array[j]) {
            switchTools(j, j-1)
        }
    }

    //TODO: 出现两次[ 8, 23, 32, 45, 56, 78 ]
    console.log('ordered list', array)
}

console.log(array)


// 以函数实现"子程序"
// JS并没有"传引用"这个概念，子程序中未找到的变量会在全局变量中查找。
// 这种行为导致了JS的方法耦合性过强
function switchTools(a,b) {
    let middle = array[a];
    array[a] = array[b];
    array[b] = middle;
}