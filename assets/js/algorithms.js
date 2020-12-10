async function bubbleSort(array) {
    for (let x = 1; x < array.length; x++) {
        for (let y = 0; y < array.length - x; y++) {
            array[y].state = STATE.MOVING;
            if (array[y].value > array[y + 1].value) {
                array[y].state = STATE.SWAPPING;
                array[y + 1].state = STATE.SWAPPING;
                drawArray(array);
                await new Promise(r => setTimeout(r, 300));
                let temp = array[y];
                array[y] = array[y + 1];
                array[y + 1] = temp;
                drawArray(array);
                await new Promise(r => setTimeout(r, 300));
                array[y].state = STATE.STATIONARY;
                drawArray(array);
            }
            array[y].state = STATE.STATIONARY;
        }
        array[array.length - x].state = STATE.ORDERED;
        drawArray(array);
    }
    array[0].state = STATE.ORDERED;
    drawArray(array);
}

async function selectionSort(array) {
    console.log(array);
    for (let x = 0; x < array.length; x++) {
        let min = x;
        for (let y = x; y < array.length; y++) {
            array[y].state = STATE.MOVING;
            if (y > x && y - 1 !== min) {
                array[y - 1].state = STATE.STATIONARY;
            }
            drawArray(array);
            await new Promise(r => setTimeout(r, 200));
            if (array[y].value < array[min].value || y === x) {
                array[min].state = STATE.STATIONARY;
                array[y].state = STATE.SELECTED;
                drawArray(array);
                await new Promise(r => setTimeout(r, 200));
                min = y;
            }
        }

        array[array.length - 1].state = STATE.STATIONARY;
        array[min].state = STATE.SWAPPING;
        array[x].state = STATE.SWAPPING;
        drawArray(array);
        await new Promise(r => setTimeout(r, 200));
        let temp = array[min]
        array[min] = array[x];
        array[x] = temp;
        array[min].state = STATE.STATIONARY;
        array[x].state = STATE.ORDERED;
        drawArray(array);
        await new Promise(r => setTimeout(r, 200));
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

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let left = [];
    let right = [];

    for (let x = 0; x < array.length; x++) {
        if (x < Math.floor(array.length / 2)) {
            left.push(array[x]);
        } else {
            right.push(array[x]);
        }
    }

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) {
    let result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length > 0) {
        result.push(left.shift());
    }

    while (right.length > 0) {
        result.push(right.shift());
    }

    return result;
}