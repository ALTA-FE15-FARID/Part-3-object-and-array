//Join Array Remove Duplicate

function joinArrayRemoveDuplicate(array1: string[], array2: string[]): string[] {
    const mergedSet = new Set([...array1, ...array2]);
    const mergedArray = Array.from(mergedSet);
    return mergedArray;
  }
  
  // Output 
  console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]))
  // ["apel", "anggur", "lemon", "leci", "nanas"]
  
  
  console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
  // ["samsung", "apple", "sony", "xiaomi"]
  
  
  console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]))
  // [“football”, “basketball”]
  