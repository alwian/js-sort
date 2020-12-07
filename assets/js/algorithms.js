function bubbleSort(array) {
    console.log(array)
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array.length - x; y++) {
            if (array[y] > array[y + 1]) {
                let temp = array[y]
                array[y] = array[y + 1]
                array[y + 1] = temp
            }
        }
    }
    console.log(array)
}

function selectionSort(array) {
    console.log(array);
    for (let x = 0; x < array.length; x++) {
        let min = x;
        for (let y = x; y < array.length; y++) {
            if (array[y] < array[min]) {
                min = y;
            }
        }
        let temp = array[min]
        array[min] = array[x];
        array[x] = temp;
    }
    console.log(array);
}