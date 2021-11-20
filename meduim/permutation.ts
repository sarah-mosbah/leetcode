function permute(nums: number[]): number[][] {

    let result = [];
    
    const doPerm = (rest, arr) => {
        if(arr.length===nums.length) {
            result.push(arr);
            return;
        }
        
        for(let i=0; i< rest.length; i++){
            const remain =rest.slice(0, i).concat(rest.slice(i + 1, rest.length));
            doPerm(remain, arr.concat(rest[i]));
        }
    }
    doPerm(nums, [])
    return result;
};