/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let nonZero = 0;
    for(let i=0; i < nums.length; i++) {
        if(nums[i] !=0) {
            nums[nonZero] = nums[i]; 
            nonZero++;
        }
    }
     for(let i=nonZero; i < nums.length; i++) {
        nums[i] =0 ;
    }
    
   

};