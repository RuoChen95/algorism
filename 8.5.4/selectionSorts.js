let array = [23, 78, 45, 8, 32, 56];

let minIndex = 0;

let middle = 0;

for (let i = 0; i < array.length; i++) {

    minIndex = i;

    for (let j = i; j < array.length; j++) {

        if (array[minIndex] > array[j]) {
            minIndex = j
        }

    }

    middle = array[i];
    array[i] = array[minIndex];
    array[minIndex] = middle;

    // switch(array[i], array[minIndex])


    //TODO: 出现两次[ 8, 23, 32, 45, 56, 78 ]
    console.log(array)

}

console.log(array)

// switch = function(a,b) {
//     let k = a;
//     a = b;
//     b = k;
// }