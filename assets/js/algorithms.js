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

function insertionSort(array) {
    console.log(array);
    for (let x = 1; x < array.length; x++) {
        let key = array[x];
        let y = x - 1;
        while (y >= 0 && array[y] > key) {
            array[y + 1] = array[y];
            y--;
        }
        array[y + 1] = key;
    }
    console.log(array);
}

function quickSort(array, start, end) {
    if (end - start > 0) {
        let lPointer = start;
        let rPointer = end;
        let pivot = array[end];

        while (lPointer <= rPointer) {
            while (array[lPointer] < pivot) {
                lPointer++;
            }

            while (array[rPointer] > pivot) {
                rPointer--;
            }

            if (lPointer <= rPointer) {
                let temp = array[lPointer];
                array[lPointer] = array[rPointer];
                array[rPointer] = temp;
                lPointer++;
                rPointer--;
            }
        }
        quickSort(array, start, rPointer);
        quickSort(array, lPointer, end)
    }
}