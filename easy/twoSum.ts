function twoSum(nums: number[], target: number): number[] {
    let arr = [];
    let map = {};
    nums.forEach((x, i) => {
       map[x] = i+1;
    });
    for (let i=0; i <nums.length; i++) {
        const remainder =target- nums[i];
        if(map[remainder] && map[remainder]-1 !== i){
            arr = [map[remainder]-1, i]; 
            break;
        }      
    }
    return arr;
};