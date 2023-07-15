//Mean & Median

function meanMedian(numbers: number[]): [number, number] {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const mean = sum / numbers.length;
    const median = numbers.length % 2 === 0
      ? (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
      : numbers[Math.floor(numbers.length / 2)];
  
    return [Math.round(mean * 10) / 10, Math.round(median * 10) / 10];
  }

  //Output

console.log(meanMedian([1, 2, 3, 4]))          // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5]))       // 3 3
console.log(meanMedian([7, 8, 9, 13, 15]))     // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50]))  // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])) // 49 30
