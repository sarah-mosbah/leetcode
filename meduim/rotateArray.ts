function rotate(nums: number[], k: number): void {
    const rotatedArray =[...nums];
    const arrLength = nums.length;
    rotatedArray.forEach((x,i) => {
        const newIndex= (i+k) % arrLength;
        nums[newIndex] = x;
    });
};