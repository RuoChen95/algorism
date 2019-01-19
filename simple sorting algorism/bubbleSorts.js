let array = [23, 78, 45, 8, 32, 56];

let middle = 0;

for (let i = 0; i < array.length; i++) {

    for (let j = array.length - 1; j >= 0; j--) {
        if (array[j-1] > array[j]) {


            middle = array[j-1];
            array[j-1] = array[j];
            array[j] = middle;
        }
    }

    //TODO: 出现两次[ 8, 23, 32, 45, 56, 78 ]
    console.log('ordered list', array)
}

console.log(array)