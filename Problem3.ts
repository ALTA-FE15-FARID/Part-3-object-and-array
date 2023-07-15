// Remove Duplicates

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
      return 0;
    }
    
    let nextUniqueIndex = 1;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[nextUniqueIndex - 1]) {
        nums[nextUniqueIndex] = nums[i];
        nextUniqueIndex++;
      }
    }
    
    return nextUniqueIndex;
  }
  
  // Output
  console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))    // 4
  console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9]))    // 6
  console.log(removeDuplicates([2, 2, 2, 11]))            // 2
  console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])) // 4
  