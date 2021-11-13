function lengthOfLongestSubstring(s: string): number {
    
    let slow =0;
    let fast =0;
    let max = 0;
     
    let map = new Map();
     
    while(fast < s.length) {
        if(map.has(s[fast])) {
             map.delete(s[slow]);
            slow++;
     } else {
        map.set(s[fast], 0);
        max =Math.max(map.size, max);
        fast++;
     }
    }
    return max;
};

lengthOfLongestSubstring("pwwkew");

