
var solution = function(isBadVersion: any) {

    return function(n: number, low: number =1, high: number = n): number {
        while(low !== high) {
            let midIndex =  Math.floor((high+low)/2);
            if(!isBadVersion(midIndex)) {
                low = midIndex+1;
            } else {
               high = midIndex;
            }
           
        }
        return low;
    };
};