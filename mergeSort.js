const mergeSort = (arr) => {
  // An array of length 1 cannot be split
  if (arr.length === 1) return arr
  
  // Set the middle element and slice array into left and right subarrays
  const middle = Math.round(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  // We call mergeSort recursively passing each subarray until we get a subarray of 1 element
  const mergedLeft = mergeSort(left)
  const mergedRight = mergeSort(right)

  // When we get both (merged) subarrays, we procced to merge together
  const merged = []

  // Compare each element until one of the arrays' length is zero
  while (mergedLeft.length !== 0 && mergedRight.length !== 0) {
    mergedLeft[0] < mergedRight[0] ? merged.push(mergedLeft.shift()) : merged.push(mergedRight.shift())
  }
  // Concatenate the remaining elements and return merged array
  if (mergedLeft.length === 0) return [...merged, ...mergedRight]
  else return [...merged, ...mergedLeft]
}
