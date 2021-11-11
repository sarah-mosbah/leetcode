function reverseWords(s: string): string {

    const array = s.split(' ');
    const answer = [];
    for(let x of array) {
        let str = x.split('')
        let low = 0;
        let high = str.length -1;
        
        while(low <= high) {
           [str[low], str[high]] = [str[high], str[low]];
            low++;
            high--;
        }
       answer.push(str.join(''))
    }
     
    return answer.join(' ');
 };