const partition = (arr, start, end) => {
  const pivot = arr[end]
  let i = start - 1
  for (let j = start; j <= end - 1; j++) {
    if (arr[j] < pivot) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]
  return i + 1
}

const quickSort2 = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const pivot = partition(arr, start, end)
    quickSort2(arr, start, pivot - 1)
    quickSort2(arr, pivot + 1, end)
  }
  return arr
}
