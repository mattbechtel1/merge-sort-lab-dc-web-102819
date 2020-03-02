function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(array1, array2) {
    let sorted = []

    while (array1.length != 0 && array2.length != 0) {
        let currentMin = array1[0] < array2[0] ? array1 : array2
        sorted.push(findMinAndRemoveSorted(currentMin))
    }
    return sorted.concat(array1).concat(array2)
}

function mergeSort(unsortedArray) {
    let midpoint = unsortedArray.length / 2
    let firstHalf = unsortedArray.slice(0, midpoint)
    let secondHalf = unsortedArray.slice(midpoint, unsortedArray.length)

    if (unsortedArray.length < 2) {
        return unsortedArray
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}