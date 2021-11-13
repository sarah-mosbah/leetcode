function lengthOfLongestSubstring(s: string): number {
    let slow =0;
    let fast =0;
    let max = 0;
    let map = new Map<any, any>();

    while(fast < s.length) {
        if(map.has(s[fast])) {
            slow++;
            map.delete(s[fast]);
    } else {
        map.set(s[fast], 0);
        max =Math.max(map.size, max);
        fast++;
    }
   }
    return max;
};

lengthOfLongestSubstring("abcabcbb");

