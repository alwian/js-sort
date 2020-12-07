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