function singleNumber(nums: number[]): number[] {

    const onlyOnce = {};
    nums.forEach((num) => {
        if(!onlyOnce[num]) {
          onlyOnce[num] = 1
        } else {
            onlyOnce[num] += 1;
        }
    });
   return Object.keys(onlyOnce).filter((x) => onlyOnce[x] === 1).map((x) =>+x);
};