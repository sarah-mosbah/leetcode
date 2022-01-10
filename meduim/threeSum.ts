type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
    const triplets: Triplet[] = [];
      array.sort((a, b) => a - b);
      for(let i = 0; i< array.length; i++) {
          let smallIdx = i + 1;
          let largeIdx = array.length - 1;
          
          while (smallIdx < largeIdx) {
              const totalSum = array[smallIdx] + array[largeIdx] + array[i];
              if(totalSum === targetSum) {
                  triplets.push([array[i], array[smallIdx], array[largeIdx]]);
                  smallIdx ++;
                  largeIdx--;
              } else if (totalSum < targetSum) {
                  smallIdx ++;
              } else {
                  largeIdx--;
              }
          }
      }
      return triplets;
  }
  