function isPowerOfTwo(n: number): boolean {

    if(n===1) {
        return true;
    }
    if(n===0) {
        return false;
    }
    if(n%2 === 0) {
        return isPowerOfTwo(n/2);
    } 
    return false;
};

function isPowerOfTwoInBit(n: number): boolean {
    if(n<=0) return false;
    return !(n&(n-1));
};