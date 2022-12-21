const partition = (arr, start, end) => {
  let lastSmallestIndex = start - 1
  for (let i = start; i <= end - 1; i++) {
    if (arr[i] < arr[end]) {
      lastSmallestIndex++
      [arr[lastSmallestIndex], arr[i]] = [arr[i], arr[lastSmallestIndex]]
    }
  }
  [arr[lastSmallestIndex + 1], arr[end]] = [arr[end], arr[lastSmallestIndex + 1]]
  return lastSmallestIndex + 1
}

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const pivotIndex = partition(arr, start, end)
    quickSort(arr, start, pivotIndex - 1) // Left subarray
    quickSort(arr, pivotIndex + 1, end)  // Right subarray
  }
}
