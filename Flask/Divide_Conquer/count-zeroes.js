function countZeroes(arr) {
  let low = 0;
  let high = arr.length - 1;

   // Perform binary search to find the first zero
   while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Check if mid is the first zero
    if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
        return arr.length - mid;
    }

    // If the middle element is 1, the first zero must be on the right side
    if (arr[mid] === 1) {
        low = mid + 1;
    } 
    // If the middle element is 0, the first zero could be this element or to the left
    else {
        high = mid - 1;
    }
}

// If there are no zeroes in the array, return 0
return 0;
}


module.exports = countZeroes