function containsDuplicate(nums: number[]): boolean {

    const dict = {};
    for(let num of nums) {
        if(dict[num]) {
            return true;
        } else {
            dict[num]=1;
        }
    }
    
    return false;
};