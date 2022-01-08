function sortedSquares(nums: number[]): number[] {
    const sortedSquaredArray = [];
    let smallIdx = 0;
    let largeIdx = nums.length - 1;
   
     for(let i =largeIdx; i > -1; i--) {
         const smallNumber = nums[smallIdx];
         const largeNumber = nums[largeIdx];
         
         if(Math.abs(smallNumber) > Math.abs(largeNumber)) {
             sortedSquaredArray[i] = smallNumber * smallNumber;
             smallIdx++;
         } else {
             sortedSquaredArray[i] = largeNumber * largeNumber;
             largeIdx--;
         }
     }
       
       return sortedSquaredArray;
   };
   
   