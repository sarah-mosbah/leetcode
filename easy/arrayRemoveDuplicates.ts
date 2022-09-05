
function removeDuplicates(nums: number[]): number {
    const hashMap = {};
    let i = 0;
    while(i <= nums.length) {
        if(hashMap[nums[i]]) {
            nums.splice(i,1);
         } else {
             hashMap[nums[i]] = 1;
             i++;
         }
    }
    return nums.length;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);


function removeDuplicates2(nums: number[]): number {
    let pointerA = 0;
   let pointerB = 1;
      
      while(pointerB < nums.length) {
          if(nums[pointerA] === nums[pointerB]) {
              nums.splice(pointerB,1);
          } else {
              pointerB++;
              pointerA++;
          }
      }
      
      return nums.length;
  };


  "use strict";
   x =23;
  console.log('xxx', x);
  var x;