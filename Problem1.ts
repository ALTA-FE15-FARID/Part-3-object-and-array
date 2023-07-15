//Compare String

function compareString(A: string, B: string): string {
  let commonSubstring = '';
  
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let substring = '';
      let k = i;
      let l = j;
      
      while (A[k] === B[l] && k < A.length && l < B.length) {
        substring += A[k];
        k++;
        l++;
      }
      
      if (substring.length > commonSubstring.length) {
        commonSubstring = substring;
      }
    }
  }
  
  return commonSubstring;
}

// Output 
console.log(compareString('AKA', 'AKASHI')); // Output: AKA
console.log(compareString('KANGAROO', 'KANG')); // Output: KANG
console.log(compareString("KI", "KIJANG"))      // KI
console.log(compareString("KUPU-KUPU", "KUPU")) // KUPU
console.log(compareString("ILALANG", "ILA"))    // ILA
